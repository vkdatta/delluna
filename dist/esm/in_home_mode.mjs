export const name="in_home_mode";
export const id="dl_ee4740a90f56ec07c984";
export const url=new URL("../icons/in_home_mode.svg?v=3ef1f2fb64698aaa1300e0330cd5ed4b72034bae7f8a1bddc0752f10fe43851a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
