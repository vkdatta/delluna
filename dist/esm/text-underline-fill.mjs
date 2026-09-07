export const name="text-underline-fill";
export const id="dl_d5353f8177c5431888b6";
export const url=new URL("../icons/T/text-underline-fill.svg?v=ee395161caf1739933486d79b6d207411868c60904a278812354581e280a3b4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
