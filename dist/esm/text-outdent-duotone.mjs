export const name="text-outdent-duotone";
export const id="dl_583b077bb8bbf64af093";
export const url=new URL("../icons/text-outdent-duotone.svg?v=d3036785b00f4c67e177bf730c9efcb1e54bfbd9193f6ba9187e2f84bc2dcce7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
