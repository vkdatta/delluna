export const name="van-fill";
export const id="dl_b33947ec448da88bb12d";
export const url=new URL("../icons/van-fill.svg?v=196b0541340d5a9357e2dec3acd7d7dbd5ffc5a6fc0bca105ed01ca662557e07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
