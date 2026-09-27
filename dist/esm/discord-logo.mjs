export const name="discord-logo";
export const id="dl_0a321f720e8741b69684";
export const url=new URL("../icons/discord-logo.svg?v=92da063b472b6d2f4b15eaa61118855db3c8a1175fc4246f90ecb8755cfcf7d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
