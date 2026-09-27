export const name="auto_read_pause-fill";
export const id="dl_2106d4e4bb4fa4e3c361";
export const url=new URL("../icons/auto_read_pause-fill.svg?v=72afe2daac976df44e2b3bdee94d2d9436a10602aedf24d1b32a12aa92a01be9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
