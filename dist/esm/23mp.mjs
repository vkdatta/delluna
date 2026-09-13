export const name="23mp";
export const id="dl_d11eb3f1002f4a7197f2";
export const url=new URL("../icons/2/23mp.svg?v=c19d576c776f25ee793b00c7aef034963d7a3e799041f21e6754e6015640c7ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
