export const name="projector-screen-fill";
export const id="dl_a5c86ee7f64f4799b527";
export const url=new URL("../icons/projector-screen-fill.svg?v=94a03eaf32ec969e2987bc79dc63b3d99defd51de91a28cdc4d69432ad5e9509",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
