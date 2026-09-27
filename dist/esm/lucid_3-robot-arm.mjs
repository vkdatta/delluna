export const name="lucid_3-robot-arm";
export const id="dl_415448ee1bc34db78d1b";
export const url=new URL("../icons/lucid_3-robot-arm.svg?v=b8662c88c4dbf9a3e603918d60cc0d943d7c82a14fe0faf0266c856de2da8b61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
