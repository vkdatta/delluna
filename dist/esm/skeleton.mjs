export const name="skeleton";
export const id="dl_50b24870bbac4d25a467";
export const url=new URL("../icons/skeleton.svg?v=9832ab11b04b0fb65565490d82da2e8cbc4ec3bbf4a611b95c38584c455e40b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
