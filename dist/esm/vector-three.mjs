export const name="vector-three";
export const id="dl_3140635b0d42409caef2";
export const url=new URL("../icons/V/vector-three.svg?v=63f49a351a383af81c670b425e495ab3e4899100cef7596eb15493f46ee85610",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
