export const name="filter_4-fill";
export const id="dl_51d2b3e10ae9faefbeaf";
export const url=new URL("../icons/filter_4-fill.svg?v=7ffac9d85b50b5f3350525f78c33f45c40d6f8ef4b28015590b9037421efcfa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
