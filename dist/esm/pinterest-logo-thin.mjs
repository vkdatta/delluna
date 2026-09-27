export const name="pinterest-logo-thin";
export const id="dl_fcc3b0f550ba4b5aa70a";
export const url=new URL("../icons/pinterest-logo-thin.svg?v=e4a7ea7f43d08704795c514d0249703abbd6ebb419474fb78efe8fec838a6fcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
