export const name="sd";
export const id="dl_06177a40dd1fb53eecfd";
export const url=new URL("../icons/sd.svg?v=ad377aa7c8f7dca70d0ba239792c4fa374087b7f03212ba18a3b42843e5a48e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
