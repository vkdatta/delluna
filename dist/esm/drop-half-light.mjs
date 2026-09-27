export const name="drop-half-light";
export const id="dl_e5ac5dedfc8f4dbc9a31";
export const url=new URL("../icons/drop-half-light.svg?v=2f19ca7c61f67fd462ebbef166b9facb5da4dc4712a6ca8d05e74c3b95827225",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
