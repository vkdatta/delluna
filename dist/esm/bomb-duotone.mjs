export const name="bomb-duotone";
export const id="dl_7cab67acb8e54316b840";
export const url=new URL("../icons/bomb-duotone.svg?v=c4b450d155dac3c536a5f1454b51f7fe58055b41ee488e5de9b7ddaeda71fe12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
