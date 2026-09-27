export const name="lucid_1-arrow-big-up";
export const id="dl_8b4d2ec492f74488bd51";
export const url=new URL("../icons/lucid_1-arrow-big-up.svg?v=6265ad0eba53ae27e23745829916c282af45c83b9e018b792e8c477a135aaea0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
