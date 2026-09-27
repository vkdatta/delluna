export const name="unpaved_road";
export const id="dl_fb5ef2485cba7e8f84ec";
export const url=new URL("../icons/unpaved_road.svg?v=eb80925be02ac4a9f117f804f70026e3c121708d5bc7b8f35c776ec9e03d6019",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
