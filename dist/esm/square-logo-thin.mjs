export const name="square-logo-thin";
export const id="dl_52f82d64d22dbd268e34";
export const url=new URL("../icons/square-logo-thin.svg?v=8771ac907b1fb3b191d095acdc24756beacbcab1a62c2df86a8ba328e687a881",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
