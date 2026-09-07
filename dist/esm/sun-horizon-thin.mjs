export const name="sun-horizon-thin";
export const id="dl_7a98fd09c296405b907a";
export const url=new URL("../icons/S/sun-horizon-thin.svg?v=d9c878de6c9d6cf91e638b276557a3644034f0a6c8f1de5f415038a826c2cbd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
