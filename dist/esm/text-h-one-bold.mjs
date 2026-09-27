export const name="text-h-one-bold";
export const id="dl_22927a867e8a4f67afa8";
export const url=new URL("../icons/text-h-one-bold.svg?v=8d90ce2f89bfbdf151c83ef31e55f3313a37efb6d3792219127bef812c448bc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
