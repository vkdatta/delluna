export const name="arrow-square-up-right";
export const id="dl_d69f4ef324f24536bf11";
export const url=new URL("../icons/arrow-square-up-right.svg?v=31e0069c9b56a014a97a24f05b73815525bb876cb112f8a0f5a0258868ccb436",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
