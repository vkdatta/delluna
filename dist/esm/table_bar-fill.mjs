export const name="table_bar-fill";
export const id="dl_0fd95bbca9ac33dc7697";
export const url=new URL("../icons/table_bar-fill.svg?v=367473d38aa4bb36637a854ed8283c3bc29705e9112435fbb9be874580e8e58f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
