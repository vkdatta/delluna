export const name="coffee_maker-fill";
export const id="dl_7bac0bea36269be4999b";
export const url=new URL("../icons/coffee_maker-fill.svg?v=58b18203cd4e5b698075a8f96ed276ae0d1cd5154c88001f9f1eea83ca95935e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
