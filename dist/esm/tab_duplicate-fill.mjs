export const name="tab_duplicate-fill";
export const id="dl_72d619612432e1dcb8bc";
export const url=new URL("../icons/tab_duplicate-fill.svg?v=89df5aafdc0a02ab225b265c37136e64b345625d7b7721365b2320a7b23884fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
