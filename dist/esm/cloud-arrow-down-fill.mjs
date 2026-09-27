export const name="cloud-arrow-down-fill";
export const id="dl_1fc0e1a92d07486d9d9e";
export const url=new URL("../icons/cloud-arrow-down-fill.svg?v=39c2d91cce5958bbe98b74856d65613a463d900b5b98b4cec97394f6d4255f9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
