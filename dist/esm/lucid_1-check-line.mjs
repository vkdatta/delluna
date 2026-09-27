export const name="lucid_1-check-line";
export const id="dl_b3a5bbb5e4df464fa98b";
export const url=new URL("../icons/lucid_1-check-line.svg?v=c4ee5a826bb8c630c4fb4f33f48890420ffe04281f93672c77ee844ea26632b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
