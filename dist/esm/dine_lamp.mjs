export const name="dine_lamp";
export const id="dl_1c43b1a8974a4a48b8f4";
export const url=new URL("../icons/dine_lamp.svg?v=cf08f7ed89e19894d150ca2f18ef0de9aa8153c3184c1c94fd9c76e3636ee69e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
