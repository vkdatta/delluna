export const name="theater_comedy-fill";
export const id="dl_30478d37433d2a7db5fd";
export const url=new URL("../icons/theater_comedy-fill.svg?v=a6091080cdf8599f183fbfddcc6172a29d2fb30b57ab628eaa2ddc51dc2f4354",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
