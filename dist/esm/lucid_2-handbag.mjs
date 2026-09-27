export const name="lucid_2-handbag";
export const id="dl_5203921295ee4e3b93d7";
export const url=new URL("../icons/lucid_2-handbag.svg?v=7478d3e8857a17eab7efe94f982b5268cf5710b62566f8a6d4f54138604654df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
