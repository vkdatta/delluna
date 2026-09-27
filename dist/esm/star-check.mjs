export const name="star-check";
export const id="dl_2d479755179b4b08b767";
export const url=new URL("../icons/star-check.svg?v=abce9f131302a64acd5a0f993331be639f00b22faa6c68756c08753d01b461eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
