export const name="text-h-three-duotone";
export const id="dl_973211520ee94cc5942e";
export const url=new URL("../icons/T/text-h-three-duotone.svg?v=2b3ec014112ce074303660b93dd48d977ac0a40b923ad1379e08d1ef7989d3d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
