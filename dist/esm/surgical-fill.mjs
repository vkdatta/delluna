export const name="surgical-fill";
export const id="dl_d9c0c18a0751b34ffe7f";
export const url=new URL("../icons/surgical-fill.svg?v=92ec9a69ae1fa8b8c1f6d0dbb65615f18bcb3d685bb0bccff1332fbdc7630fd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
