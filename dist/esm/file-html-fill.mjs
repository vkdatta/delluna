export const name="file-html-fill";
export const id="dl_bd9dcb2716a04a2a94eb";
export const url=new URL("../icons/file-html-fill.svg?v=6392407b115e70f5007e74ddd19cc4333d3f84276caec5959d81ad93ca47cadd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
