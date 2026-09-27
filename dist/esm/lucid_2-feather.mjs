export const name="lucid_2-feather";
export const id="dl_1d2297fb1d604ab6853f";
export const url=new URL("../icons/lucid_2-feather.svg?v=d649ce59e9401f59227b32e0304893214f539e8ef222ad227aceaa493ab54f4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
