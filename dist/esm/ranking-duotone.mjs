export const name="ranking-duotone";
export const id="dl_5a2d5330d6eb4876a8f7";
export const url=new URL("../icons/ranking-duotone.svg?v=627a6a6eb016cc6f2b0b1a743fe271ce822dd4ef3d596215f59508128d724b91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
