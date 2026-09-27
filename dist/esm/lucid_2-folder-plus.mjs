export const name="lucid_2-folder-plus";
export const id="dl_c128a57a4e2d4f21b280";
export const url=new URL("../icons/lucid_2-folder-plus.svg?v=511dee3498aee8d1d6cae3a7b07860747ab6207f80858bd13fadeeb89fd0094c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
