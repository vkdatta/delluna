export const name="briefcase";
export const id="dl_109158fa36e143a0b9f0";
export const url=new URL("../icons/briefcase.svg?v=c908360aa8ffeff3b78be469066aa9faf7df2eda8f34a3596c44157dddc96453",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
