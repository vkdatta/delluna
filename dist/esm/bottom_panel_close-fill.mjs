export const name="bottom_panel_close-fill";
export const id="dl_60a5f304f9e5df11ab48";
export const url=new URL("../icons/bottom_panel_close-fill.svg?v=8b31373ed2216b4a0296a9964b5abe3dce90240046caf331dfdacbc62dae0673",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
