export const name="family_link-fill";
export const id="dl_e9cc4f93c7061d0eddcd";
export const url=new URL("../icons/family_link-fill.svg?v=a48a069eac918d17039341db447f14338a78b1382e209decbb4b0153591964b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
