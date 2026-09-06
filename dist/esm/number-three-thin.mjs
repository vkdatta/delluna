export const name="number-three-thin";
export const id="dl_96d3a1b7d35c4673bb07";
export const url=new URL("../icons/number-three-thin.svg?v=de32834665925332acd71ef9b7d09cb32566bff56ac70d9f7663874aa79f074c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
