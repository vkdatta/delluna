export const name="lucid_1-briefcase-conveyor-belt";
export const id="dl_afd43382d1504bd1b39f";
export const url=new URL("../icons/lucid_1-briefcase-conveyor-belt.svg?v=91938b0aee4166b890a67726482d9e6dcad4ed84164c8d95b9263379f1003ef3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
