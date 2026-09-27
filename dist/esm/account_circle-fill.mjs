export const name="account_circle-fill";
export const id="dl_17c61f0724ec73280db6";
export const url=new URL("../icons/account_circle-fill.svg?v=c3da4a9a78297aa93d53693f9e48ec25ab405b33031a1bdbc7036d3403175746",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
