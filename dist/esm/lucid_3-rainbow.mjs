export const name="lucid_3-rainbow";
export const id="dl_ba14e86e8c4f48bcbde9";
export const url=new URL("../icons/lucid_3-rainbow.svg?v=e7859c75cc483ade299a1c5e001806986142cc19a59ebadd5ced187ddd3ff4d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
