export const name="arrows-in-line-vertical";
export const id="dl_16fad510bfe043be8d41";
export const url=new URL("../icons/arrows-in-line-vertical.svg?v=fd5c97c6287cd18e0bd5f723f67e86746e95a83b48d0b2fe1f26f5a1296bf091",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
