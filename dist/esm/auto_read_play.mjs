export const name="auto_read_play";
export const id="dl_46fe673a1d2049308643";
export const url=new URL("../icons/A/auto_read_play.svg?v=bac4e81a04141dfeeeb80fce6bbbeec9346b2e4486344e32971535741203c7cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
