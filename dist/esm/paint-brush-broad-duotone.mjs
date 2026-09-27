export const name="paint-brush-broad-duotone";
export const id="dl_edde7471edb14cfb9e2a";
export const url=new URL("../icons/paint-brush-broad-duotone.svg?v=508e2866a19c63e6a2472fe2943ad3852dcf5318ab53c798ae672c393de66fe6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
