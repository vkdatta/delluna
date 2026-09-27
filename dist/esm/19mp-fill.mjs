export const name="19mp-fill";
export const id="dl_83758e24b2f338b3599e";
export const url=new URL("../icons/19mp-fill.svg?v=a5ba5c83bc57202c61abb660dcbf35f4f8bd2fa3e1e1998eef7682aac1ac96cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
