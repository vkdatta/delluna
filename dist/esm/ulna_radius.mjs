export const name="ulna_radius";
export const id="dl_78c4ad1bab06c3cdf043";
export const url=new URL("../icons/ulna_radius.svg?v=651d49f807081f5956fa8f2d4e209878b9750fa541aa8dd1bfb2ed69c196d9d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
