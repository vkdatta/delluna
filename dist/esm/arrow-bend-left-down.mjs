export const name="arrow-bend-left-down";
export const id="dl_bfaa9f348a9f4d0ba45b";
export const url=new URL("../icons/arrow-bend-left-down.svg?v=ca51ae5f35462ac5ffa8d4516f61e4412aeca5ae7782990d731470715c03cce5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
