export const name="signature-thin";
export const id="dl_f630166a29c14c99b0c6";
export const url=new URL("../icons/S/signature-thin.svg?v=bf15ad148f0a9bafe9938262006398aea6e48dd03dfc2b914cc62608d01db3b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
