export const name="corners-in-thin";
export const id="dl_596b893478224dacbc67";
export const url=new URL("../icons/corners-in-thin.svg?v=6323474771a44c4eb0b5cd7c475ae30c98163fd7b8a677e5538ee78fa6a391aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
