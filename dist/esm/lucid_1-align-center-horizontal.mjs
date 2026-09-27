export const name="lucid_1-align-center-horizontal";
export const id="dl_0d858d77d4c54dfc81bc";
export const url=new URL("../icons/lucid_1-align-center-horizontal.svg?v=c9b08a91efbec855c0453ae2d2f6fc49174858d0eba91a12107c4347c3629746",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
