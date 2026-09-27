export const name="anchor-light";
export const id="dl_8b3d77d5cea74591be68";
export const url=new URL("../icons/anchor-light.svg?v=06d3c3b07b830bf26c2beacf74c5f092ede17d10cdf390a73b37072f2e770f25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
