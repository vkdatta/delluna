export const name="drop-half-bottom-bold";
export const id="dl_bdfc4e8975054004918d";
export const url=new URL("../icons/drop-half-bottom-bold.svg?v=9a5baaa690aebdd09d8d543aeb37607e5e3e88ee3d7d05f5a96c64448e9cf199",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
