export const name="csv";
export const id="dl_b45acdaa69e340b4bb1a";
export const url=new URL("../icons/csv.svg?v=2beef5986ab0c573f2e790f934e9c26439b94bac5f748cc3c7e71cf1619419cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
