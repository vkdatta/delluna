export const name="polygon";
export const id="dl_b78699541f7e4ddd96f1";
export const url=new URL("../icons/polygon.svg?v=06c7d1a9c7af71f08985e2ee5cdbddcbb8388939c30a22db1a65f491d5eae9c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
