export const name="wifi_calling";
export const id="dl_567bd479ef3f435d8f2d";
export const url=new URL("../icons/wifi_calling.svg?v=48d684da68144744eed327b3d60a8f1fbfbefd5cc7b9cb525c075e652cc11ed4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
