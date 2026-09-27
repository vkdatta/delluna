export const name="smiley-melting-fill";
export const id="dl_40bb4f65cd5325a33057";
export const url=new URL("../icons/smiley-melting-fill.svg?v=5779748cbb7abaff107811b6aca53314f330538d76a3b82eaec9fdf67c4488d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
