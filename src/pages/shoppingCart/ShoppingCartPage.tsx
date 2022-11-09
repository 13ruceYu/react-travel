import React from "react";
import styles from "./ShoppingCartPage.module.css";
import { MainLayout } from "../../layouts/mainLayout";
import { Row, Col, Affix } from "antd";
import { ProductList, PaymentCard } from "../../components";
import { useAppDispatch, useSelector } from "../../redux/hooks";
import { clearShoppingCartItem } from "../../redux/shoppingCart/slice";

export const ShoppingCartPage: React.FC = (props) => {
  const dispatch = useAppDispatch()
  const jwt = useSelector(s => s.user.token) as string

  const shoppingCartItems = useSelector(s => s.shoppingCart.items)
  const loading = useSelector(s => s.shoppingCart.loading)
  return (
    <MainLayout>
      <Row>
        {/* 购物车清单 */}
        <Col span={16}>
          <div className={styles["product-list-container"]}>
            <ProductList data={shoppingCartItems.map(item => item.touristRoute)} />
          </div>
        </Col>
        {/* 支付卡组件 */}
        <Col span={8}>
          <Affix>
            <div className={styles["payment-card-container"]}>
              <PaymentCard
                loading={loading}
                originalPrice={shoppingCartItems.map(s => s.originalPrice).reduce((a, b) => a + b, 0)}
                price={shoppingCartItems.map(s => s.originalPrice * (s.discountPresent ? s.discountPresent : 1)).reduce((a, b) => a + b, 0)}
                onShoppingCartClear={() => dispatch(clearShoppingCartItem({ jwt, itemIds: shoppingCartItems.map(item => item.id) }))}
                onCheckout={function (): void {
                  throw new Error("Function not implemented.");
                }} />
            </div>
          </Affix>
        </Col>
      </Row>
    </MainLayout>
  );
};
