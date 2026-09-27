export const name="lucid_2-list-checks";
export const id="dl_b2c59e9f4c174526a318";
export const url=new URL("../icons/lucid_2-list-checks.svg?v=3e5e4bc8255a11dab6e491b4b038855e6b6009bb3b2720ea4e4829efbe782e09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
