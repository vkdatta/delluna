export const name="lucid_2-heading";
export const id="dl_3a3f86cfea034fe1a4d1";
export const url=new URL("../icons/lucid_2-heading.svg?v=c63954f9d308f809e4243af477876352a61bfb1d3351f37f89da9273f46c8359",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
