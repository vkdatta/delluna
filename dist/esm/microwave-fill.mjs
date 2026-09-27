export const name="microwave-fill";
export const id="dl_c56eb6a8e48a0c87b897";
export const url=new URL("../icons/microwave-fill.svg?v=4d704c9ca40017a944b4d032f7c192e448cbcae0bbd3a4758d8194de9cb1c904",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
