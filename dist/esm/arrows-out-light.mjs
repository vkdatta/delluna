export const name="arrows-out-light";
export const id="dl_1d2696decbff43cdacae";
export const url=new URL("../icons/arrows-out-light.svg?v=e2dc6b9307705810051cf7b7fbd740db30609cc6beeab63a28ceaeced14c39e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
