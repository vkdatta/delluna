export const name="hand-waving-light";
export const id="dl_20cb6ddf421e4804a3f7";
export const url=new URL("../icons/hand-waving-light.svg?v=6856b4cc3dc9d6b9c645618727c9be0fa030a0e7d58662f909f51c0790bbcf19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
