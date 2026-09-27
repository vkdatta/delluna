export const name="square-split-horizontal-thin";
export const id="dl_409b1be962e71b7d76c6";
export const url=new URL("../icons/square-split-horizontal-thin.svg?v=3e7390a6b2683d82e4b666c2c6b42bf47e8c035a87948b6e573c7f602e68ec9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
