export const name="address-book-thin";
export const id="dl_22cbc782bd4b42c4a955";
export const url=new URL("../icons/address-book-thin.svg?v=02918556c0e01017f8868dd200cd6158361bd8d90b7b06cb02320cbc6e852c00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
