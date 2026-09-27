export const name="lucid_1-circle-parking-off";
export const id="dl_3b3d211ad8dd4b4dbb41";
export const url=new URL("../icons/lucid_1-circle-parking-off.svg?v=0b32065d8d72c9dd76e71da011feed930dd55ccc89b5194551546b0c6ac417f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
