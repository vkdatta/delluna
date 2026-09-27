export const name="lucid_3-robot-arm";
export const id="dl_415448ee1bc34db78d1b";
export const url=new URL("../icons/lucid_3-robot-arm.svg?v=9485f1fbb58ae8f71d8c0fbf9aeda0ca6abfc34a468459abcfdbb13d670c508e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
