export const name="double_chevron_up";
export const id="dl_4db64263371efdbbd1cd";
export const url=new URL("../icons/double_chevron_up.svg?v=302a600c04328930a190dce7232fe22b659e03ef70325995c1b4e2907b2a9cbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
