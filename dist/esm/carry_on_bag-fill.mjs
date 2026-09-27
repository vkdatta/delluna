export const name="carry_on_bag-fill";
export const id="dl_2c8f6449940acd78c016";
export const url=new URL("../icons/carry_on_bag-fill.svg?v=c16a98488099e6193c7172a9d010f36e026743e3297223a30ffc833e1d6fe00c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
