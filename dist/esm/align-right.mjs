export const name="align-right";
export const id="dl_4bb1615676b74f50b7d2";
export const url=new URL("../icons/align-right.svg?v=938f775d0f5ede219d40b347b16362a88e13706d0b1009d7adf552b6c62269df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
