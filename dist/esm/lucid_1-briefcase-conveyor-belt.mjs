export const name="lucid_1-briefcase-conveyor-belt";
export const id="dl_afd43382d1504bd1b39f";
export const url=new URL("../icons/lucid_1-briefcase-conveyor-belt.svg?v=cf4f7cb9609c04376dc868c5e0b1b437fc1abe0cfb3b9bda37428801f1fb8740",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
