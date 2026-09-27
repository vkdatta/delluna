export const name="lucid_1-bell-check";
export const id="dl_f6f52c5c28d747719d0c";
export const url=new URL("../icons/lucid_1-bell-check.svg?v=4e0b10d40b867c3fd5fac3870f0d5dc27436a2ba7aaa5925f6924411905f1c1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
