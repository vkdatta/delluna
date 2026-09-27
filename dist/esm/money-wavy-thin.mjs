export const name="money-wavy-thin";
export const id="dl_c352cf6701994d2592e2";
export const url=new URL("../icons/money-wavy-thin.svg?v=da029b5c0b8f0b9803782af5963587b9ec7f91ffb5029e6088b7ec52ecc287d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
