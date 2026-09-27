export const name="star_rate";
export const id="dl_953dbe66fa41225ec25e";
export const url=new URL("../icons/star_rate.svg?v=e91ea7cce4ebd4f4d95922fbb2da446ea25c30c33d8904c199f4cb39bb925a37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
