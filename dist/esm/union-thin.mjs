export const name="union-thin";
export const id="dl_ac16718805f20ea65aa9";
export const url=new URL("../icons/union-thin.svg?v=886d6fb46b6f527c517c2e7c657cf10e8aafb5b6cb08bd85ff70d5fd33bb00e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
