export const name="lucid_3-monitor-pause";
export const id="dl_5bf65c55f50445b5adbd";
export const url=new URL("../icons/lucid_3-monitor-pause.svg?v=ae4fc56b009adca0a5305558fd3cced51a31dabaa4d6f40033eef4d913443e18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
