export const name="repartition-fill";
export const id="dl_19d9862cd1ad4834bcbf";
export const url=new URL("../icons/repartition-fill.svg?v=8cbf0f506a2446a8d140492f9a328d685bd7c234faf8f746e0b31b2486bd40f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
