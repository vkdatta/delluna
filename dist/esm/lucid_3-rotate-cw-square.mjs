export const name="lucid_3-rotate-cw-square";
export const id="dl_20595aec348b4b83848f";
export const url=new URL("../icons/lucid_3-rotate-cw-square.svg?v=7419b17aeb386342427c61a32bdb89bbdf13070033ff966907515aa6c0844729",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
