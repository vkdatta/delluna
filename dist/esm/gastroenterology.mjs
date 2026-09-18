export const name="gastroenterology";
export const id="dl_a0a9a0b6abf84de3b54d";
export const url=new URL("../icons/gastroenterology.svg?v=efd84fdc1d8864857944c0ddd07857db4c7a377e57bed073f316e39067488b4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
