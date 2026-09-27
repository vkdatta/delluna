export const name="discord-logo";
export const id="dl_0a321f720e8741b69684";
export const url=new URL("../icons/discord-logo.svg?v=2fdecacb45bcb46a8d608e731ee0c4985a2e94e5d5275a247d21cdbc77f40981",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
