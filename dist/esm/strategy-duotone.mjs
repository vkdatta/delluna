export const name="strategy-duotone";
export const id="dl_f66751eb97724b269211";
export const url=new URL("../icons/S/strategy-duotone.svg?v=9215a7a079cc724467ecbbf401557f76d58dc9b794e47c92fad395d721a7c7fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
