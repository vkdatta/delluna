export const name="align-right";
export const id="dl_4bb1615676b74f50b7d2";
export const url=new URL("../icons/align-right.svg?v=d81e3da2afe6c905edb441b5332f4ce156c6131c51c91bd51e60a85e0753f396",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
