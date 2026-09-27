export const name="text-align-start";
export const id="dl_5d08e4f03cac41878e93";
export const url=new URL("../icons/text-align-start.svg?v=c9cda658f9b95953cc28feaedd766436b94ee002c59c668d142e257cef91c1b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
