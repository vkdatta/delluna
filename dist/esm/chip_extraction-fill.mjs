export const name="chip_extraction-fill";
export const id="dl_a7b4b9de89fb4eb8adeb";
export const url=new URL("../icons/C/chip_extraction-fill.svg?v=4e1d05b4f2152b8d7c1deffcaab02626a87b2b1a3cc0707d71d944736f553f6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
