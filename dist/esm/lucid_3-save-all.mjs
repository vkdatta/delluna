export const name="lucid_3-save-all";
export const id="dl_59580d42e52d45e88e6a";
export const url=new URL("../icons/lucid_3-save-all.svg?v=0ab2b07cd2fca4016a61b3192f2694f9eedae5ced5f2dac8c10cca7e468224bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
