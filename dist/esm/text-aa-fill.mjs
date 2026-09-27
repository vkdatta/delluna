export const name="text-aa-fill";
export const id="dl_434ae2b2fb846df4e68c";
export const url=new URL("../icons/text-aa-fill.svg?v=1b6df1a7dfcbd6380e491b9be82117dbb8143b8fa973b188a9d1d528d534d6ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
