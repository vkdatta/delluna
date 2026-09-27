export const name="number-three-thin";
export const id="dl_96d3a1b7d35c4673bb07";
export const url=new URL("../icons/number-three-thin.svg?v=66051968906d93979dda0c142d7ed5a3c4f06fa768e0ca76da5b77427d7f65cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
