export const name="solar-roof-duotone";
export const id="dl_122bf39ba4326418673c";
export const url=new URL("../icons/solar-roof-duotone.svg?v=24b2115224fc93137a27fefe53cd5d54f75963fdd78c9f29d9dab899ab0cad95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
