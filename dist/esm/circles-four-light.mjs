export const name="circles-four-light";
export const id="dl_05a0281203a54eb28f72";
export const url=new URL("../icons/circles-four-light.svg?v=f6a2150f0b9cafe6e5b8f31b64d16d723fe953587c74b38c326988903419e528",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
