export const name="heart-thin";
export const id="dl_8110df4d8ebb4a128c43";
export const url=new URL("../icons/heart-thin.svg?v=934c985bf7bb3568ebec299e78b6216e5302e91e0c6f81114339edef441c25c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
