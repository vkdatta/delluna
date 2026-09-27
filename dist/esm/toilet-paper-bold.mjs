export const name="toilet-paper-bold";
export const id="dl_ab084217d38635d2c0cc";
export const url=new URL("../icons/toilet-paper-bold.svg?v=d36667ae9c8c5feb5ce5e4f5fd75c9e0f29ac67a2381a26e60921cf1423b7fe3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
