export const name="computer_arrow_up-fill";
export const id="dl_4c70352beedc48c4992d";
export const url=new URL("../icons/C/computer_arrow_up-fill.svg?v=8af0ac314bcb08fdfa5ed8bddd9c7384eef0cd3a72e08f6af2de12c6fa089f5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
