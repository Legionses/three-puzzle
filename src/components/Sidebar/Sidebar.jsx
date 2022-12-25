import React, {useContext} from "react";
import styles from "./styles.less";
import {GameContext} from "../GameScene/Provider";
const Sidebar = () => {
    const { canvases } = useContext(GameContext);

    return(
        <div className={styles.container}>
            <div className={styles.list}>
                {canvases.map(({img, id}) => {
                        return(
                            <div key={id} className={styles.listItem}>
                                <img src={img} title="segment"/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar;