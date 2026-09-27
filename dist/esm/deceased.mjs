export const name="deceased";
export const id="dl_08d1e08580aa8b3ace35";
export const url=new URL("../icons/deceased.svg?v=ee68881976f2b24b42ef261c94e56d9e5a05c032fab79b44182e754518b82452",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
