export const name="tools_phillips";
export const id="dl_c3081aff0c1a22cae0b8";
export const url=new URL("../icons/tools_phillips.svg?v=09cb91871ccbc42885a6d1e0b30cde29a614dae31f39f6a9713d5577fb37b569",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
