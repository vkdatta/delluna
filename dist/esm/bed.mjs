export const name="bed";
export const id="dl_7e0f933ebbf84468b866";
export const url=new URL("../icons/bed.svg?v=b65defed2f5352ecd9f4583efba5108b646386c46f7a549d1c0cdbfd9d56372e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
