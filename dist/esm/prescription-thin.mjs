export const name="prescription-thin";
export const id="dl_29a8e0dbf6584a259069";
export const url=new URL("../icons/prescription-thin.svg?v=b748f09a7c6c84a02e702e43f0df3cd2b76560988b5fb52192ee0ce9330b988b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
