export const name="pending-fill";
export const id="dl_5e24c737856b94969cdf";
export const url=new URL("../icons/pending-fill.svg?v=e0b0f10822485fb7c343e9a5e69a86487c1b800c78e6f6afb1c31b5fc8807586",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
