export const name="popsicle";
export const id="dl_f0284a2ef00647358da1";
export const url=new URL("../icons/popsicle.svg?v=625f7ac78c1016ef22e1518d2c9eb7fbfbcc03c86d0af9a9d91da933923f6558",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
