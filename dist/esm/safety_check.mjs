export const name="safety_check";
export const id="dl_393cef17500340af8e80";
export const url=new URL("../icons/safety_check.svg?v=604db72b7393354aa21501e4c11696664d6550ce9c5d60a504acd5f3feb9deaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
