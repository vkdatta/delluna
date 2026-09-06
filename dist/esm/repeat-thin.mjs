export const name="repeat-thin";
export const id="dl_efbb02f86fdf424f9857";
export const url=new URL("../icons/repeat-thin.svg?v=884de3dbceb9f583046349789482d7a6397d8e4e613c026e70c669dae2e64799",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
