export const name="tabs-duotone";
export const id="dl_9cef56570c70d0e323bc";
export const url=new URL("../icons/tabs-duotone.svg?v=205ace3f5afde87a68e8b547949380282a17dd3a5016dcb3f6ce3be3011782e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
