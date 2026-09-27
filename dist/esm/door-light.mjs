export const name="door-light";
export const id="dl_af9196dcec504868b54d";
export const url=new URL("../icons/door-light.svg?v=0672b3767f5cb8ace914b9d33e1018827cc886a6d76aaaf6f77df5a9c90349aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
