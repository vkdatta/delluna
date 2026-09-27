export const name="coin-thin";
export const id="dl_84a8235729314bbdb3e7";
export const url=new URL("../icons/coin-thin.svg?v=13926ffa7ea8f199ee00a01dec2d75e489a5f90c19aea951dce2e90cd811ed76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
