export const name="escalator-down-duotone";
export const id="dl_b7277fd3e3784c24918d";
export const url=new URL("../icons/escalator-down-duotone.svg?v=a8ac16bdd2ebdb0ebf3c9abf2d58615b2f084f95989293673bc88a83d0b6c0f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
