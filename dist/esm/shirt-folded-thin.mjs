export const name="shirt-folded-thin";
export const id="dl_b43e6d572db0e123f1dc";
export const url=new URL("../icons/shirt-folded-thin.svg?v=47f825b02e02d1d4f56f59e0598842e809ec42cd7b839db7047ccb6325bb32ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
