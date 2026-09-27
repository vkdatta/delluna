export const name="no_backpack";
export const id="dl_87c6f8262208af2c2bb1";
export const url=new URL("../icons/no_backpack.svg?v=f2539ff1bdec9edfae3f0a69c75c0bf9850a5353e036b310233233a2f6d07f0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
