export const name="lucid_2-list-chevrons-up-down";
export const id="dl_2c48af1c869f4644968f";
export const url=new URL("../icons/lucid_2-list-chevrons-up-down.svg?v=7ce172d35e5fead7ba3fdae7f8887835ae869bd1293b9df90751ba35df17102a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
