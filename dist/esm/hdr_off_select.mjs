export const name="hdr_off_select";
export const id="dl_cc0630bf932d4fa0b8b0";
export const url=new URL("../icons/hdr_off_select.svg?v=d552572dbe76e9ae26129a18cd7cd22edb120f74f0ae34a63619bc3997dc7de5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
