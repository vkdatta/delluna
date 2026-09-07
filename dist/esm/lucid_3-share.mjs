export const name="lucid_3-share";
export const id="dl_319b309b41bc43e1bb11";
export const url=new URL("../icons/lucid_3-share.svg?v=e6c3e30a052cb3c0ba75ef4aacc26918f3189610ffa1413c02824b9710522c11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
