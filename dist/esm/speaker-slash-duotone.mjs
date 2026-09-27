export const name="speaker-slash-duotone";
export const id="dl_94c60216845d207c8c1d";
export const url=new URL("../icons/speaker-slash-duotone.svg?v=37b6ac149f9f0d4a2d87412c0458286a46f3ce6928aafb615a625eea68dea505",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
