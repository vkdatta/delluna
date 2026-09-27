export const name="reset_focus-fill";
export const id="dl_c265c80023ff16839b69";
export const url=new URL("../icons/reset_focus-fill.svg?v=2281108015d923e9e5f4fcb80779eb6bf371df0fc9417c4d23dd209e15ddeb6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
