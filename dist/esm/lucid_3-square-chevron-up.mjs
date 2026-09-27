export const name="lucid_3-square-chevron-up";
export const id="dl_e88bdd2bcd4546febbf8";
export const url=new URL("../icons/lucid_3-square-chevron-up.svg?v=8a799a48905814d8ef3db20ff5f4e6a910ebfe57d72ec60a566db84a1c51b687",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
