export const name="play-bold";
export const id="dl_fbaeb0c4a1c24d7b9e1f";
export const url=new URL("../icons/play-bold.svg?v=f54e774d80d2b4d134a4babd3c03ee2a217aa4856566ed0a288e48e1a2f29d16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
