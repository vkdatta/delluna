export const name="folder-simple";
export const id="dl_a1ff8273c3eb493f9b42";
export const url=new URL("../icons/folder-simple.svg?v=64d0a5a5a35582fc369e5723b6f4095cfa581402d070108ff328befdd29b06d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
