export const name="user-circle-check-bold";
export const id="dl_09da69203e29478ba72e";
export const url=new URL("../icons/U/user-circle-check-bold.svg?v=9b88fdaf7727afd892ff2568e06745d1ce6dc41b415ac1dcdec80015c6cd27a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
