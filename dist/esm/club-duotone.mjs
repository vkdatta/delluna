export const name="club-duotone";
export const id="dl_2f60de7ab7bf424cb73e";
export const url=new URL("../icons/club-duotone.svg?v=1cc2681bfaaa1bf574bad272978f584ddb5e1e58db86f021191f4f190f562dbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
