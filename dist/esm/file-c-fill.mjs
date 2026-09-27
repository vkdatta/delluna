export const name="file-c-fill";
export const id="dl_eb48489a82c041c38fce";
export const url=new URL("../icons/file-c-fill.svg?v=af1dcd9f499c72819f2214934e91301f1ab34f9210f0da90a41989e243823b7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
