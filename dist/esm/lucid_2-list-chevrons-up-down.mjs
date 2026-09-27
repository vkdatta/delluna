export const name="lucid_2-list-chevrons-up-down";
export const id="dl_2c48af1c869f4644968f";
export const url=new URL("../icons/lucid_2-list-chevrons-up-down.svg?v=7c61aa6d99dd57743bfa2aacf4fc32279d8cde16eff975662ac8fc217cb02443",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
