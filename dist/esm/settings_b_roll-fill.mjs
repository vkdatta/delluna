export const name="settings_b_roll-fill";
export const id="dl_a9e985a6b8d94891a8fb";
export const url=new URL("../icons/S/settings_b_roll-fill.svg?v=9895ed78e206e4a0e20a05cb2c0d4e6073a6f60837fcb0aa842461a9e1f70f18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
