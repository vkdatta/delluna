export const name="lock_open_right-fill";
export const id="dl_df060feae6841a5642c6";
export const url=new URL("../icons/lock_open_right-fill.svg?v=9b02247efdb195b309e46666b1f0be52883cc822406db5203b65e9969d6cfb3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
