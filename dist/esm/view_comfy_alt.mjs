export const name="view_comfy_alt";
export const id="dl_737909dee8f8446d4329";
export const url=new URL("../icons/view_comfy_alt.svg?v=b62844dafe7c1e3c5ce6a7d3b813418034aba0baae6bc7d216d0b041ed4c2f31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
