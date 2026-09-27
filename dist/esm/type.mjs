export const name="type";
export const id="dl_11ea2afa1c054dd7a986";
export const url=new URL("../icons/type.svg?v=9f05b5c4e9b1223a981e4992bf97a9e49fd8deec178be7e36baf6b6950d40f04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
