export const name="view";
export const id="dl_ce8c287c03854bcd8c82";
export const url=new URL("../icons/view.svg?v=a64e13248045fdc296835117c48d81c9b2bab65af9a4b7a754ae7085a7fe6ad1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
