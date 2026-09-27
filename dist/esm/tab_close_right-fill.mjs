export const name="tab_close_right-fill";
export const id="dl_a8838a3399956dc06044";
export const url=new URL("../icons/tab_close_right-fill.svg?v=4dc0646590a9e75564f3451ba6296a47e028666204c31e201bef3411519be35a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
