export const name="add-fill";
export const id="dl_2caa1ad2162a4d82bff9";
export const url=new URL("../icons/add-fill.svg?v=9f80cc15bfa7938f6796b94c7651e47d9aca633692d1e8d92e8399e1f315747f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
