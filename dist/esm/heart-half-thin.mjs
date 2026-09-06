export const name="heart-half-thin";
export const id="dl_23a6719c9d6d4609a9e6";
export const url=new URL("../icons/heart-half-thin.svg?v=1acb8ba4b0141183f087d6931a0af596499b0633b10a63d38a21b9da9f4ad440",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
