export const name="user-square-thin";
export const id="dl_cd90dfa7b7cfcdaf5d40";
export const url=new URL("../icons/user-square-thin.svg?v=7190894dedb5dbc6bd5d901bf233e643f1e1f64b0fea28764b77f38d2fb257ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
