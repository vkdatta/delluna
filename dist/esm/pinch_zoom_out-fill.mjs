export const name="pinch_zoom_out-fill";
export const id="dl_d974b4ea105a23cc7879";
export const url=new URL("../icons/pinch_zoom_out-fill.svg?v=9121df7bae03da76905e268bdb84551fcc69558fe2f4a95ccbbef3d9aab1903a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
