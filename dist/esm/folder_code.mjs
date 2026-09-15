export const name="folder_code";
export const id="dl_85372a4b3abf476f8248";
export const url=new URL("../icons/F/folder_code.svg?v=8bee961a0f3c8ae541ab66722901c62acee5508596dcfbf8d178edb168a48a53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
