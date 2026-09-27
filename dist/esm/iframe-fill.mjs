export const name="iframe-fill";
export const id="dl_0903cffe886222c2b574";
export const url=new URL("../icons/iframe-fill.svg?v=d508144e5a6107cfcecb118c54a201d87f8af8a48bc8cfe155e100ed4971cf6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
