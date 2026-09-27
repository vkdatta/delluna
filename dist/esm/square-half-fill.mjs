export const name="square-half-fill";
export const id="dl_def6fa1ae99f5fcc8b46";
export const url=new URL("../icons/square-half-fill.svg?v=70c8281c4f89af3b47233df7f79b1b504b8437899e4c927a3473852ef3f2e905",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
