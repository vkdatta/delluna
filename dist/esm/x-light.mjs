export const name="x-light";
export const id="dl_674da00414ce83448f5c";
export const url=new URL("../icons/x-light.svg?v=2cf5bda36b7cd595edaea5160b7e88d4e1d64e8d8b4bbea78c9b75411cbae647",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
