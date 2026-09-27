export const name="fit_page-fill";
export const id="dl_fa3b29ab99b3dd982ce0";
export const url=new URL("../icons/fit_page-fill.svg?v=a8fee7be7be1d6f7239ca60b31f527767b6c13557c95c8e132db62b04f4e5ba2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
