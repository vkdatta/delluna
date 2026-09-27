export const name="lucid_1-cloud-drizzle";
export const id="dl_eac6a7011dcb45e1841b";
export const url=new URL("../icons/lucid_1-cloud-drizzle.svg?v=2df57b7fa7957a6426658ec4fe6dac2a36aa52bf9714bf2b7696bdecdcc74854",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
