export const name="virus-fill";
export const id="dl_6b1f58fedf7afa67d9d2";
export const url=new URL("../icons/virus-fill.svg?v=b61d52240ac953e80e2d5714f52e230a85b3e298235df7e97e3a9a4e8e6320e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
