export const name="bottom_panel_close-fill";
export const id="dl_fc09cc8ec3df40e39297";
export const url=new URL("../icons/bottom_panel_close-fill.svg?v=67a92e5964cd059088812b4d76f2bb4b91ffe4cf500d560eed5f7fec1db4cd18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
