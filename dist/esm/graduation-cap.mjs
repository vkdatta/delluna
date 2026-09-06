export const name="graduation-cap";
export const id="dl_86a330892792430d9795";
export const url=new URL("../icons/graduation-cap.svg?v=855b9f61c75900768c0265f671456554215e37b5bf15af9afa7acef36ec31c48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
