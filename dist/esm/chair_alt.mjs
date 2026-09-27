export const name="chair_alt";
export const id="dl_efcddecde91dc59b1ae5";
export const url=new URL("../icons/chair_alt.svg?v=21b1ee70aaafd6873c7f0588031241dc6a0d6ff82d8cb1bc824742b476283790",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
