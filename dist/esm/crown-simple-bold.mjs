export const name="crown-simple-bold";
export const id="dl_c9dbf1a3b912400bb0d7";
export const url=new URL("../icons/crown-simple-bold.svg?v=67f82cbc4725f5e6d80d5c4ee2b10ed97d29eeddb96780ff5b461ddc94a46919",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
