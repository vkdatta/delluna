export const name="lucid_3-shopping-bag";
export const id="dl_228b9bdd15bb4da08a99";
export const url=new URL("../icons/lucid_3-shopping-bag.svg?v=c75c3f100e771c722100475c7fad0fa0dab6a3cf32b3c09c16020c23291d5178",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
