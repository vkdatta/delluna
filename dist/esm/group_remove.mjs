export const name="group_remove";
export const id="dl_240c298d8958fe6dfb32";
export const url=new URL("../icons/group_remove.svg?v=a7b8fe87e8c39182ed2aa4fa3c5a03608a68e8def7fc8b3e8ac31d0c5c232b20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
