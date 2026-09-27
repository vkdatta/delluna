export const name="telescope";
export const id="dl_79a217c815df40569378";
export const url=new URL("../icons/telescope.svg?v=63792cb3ef25031b6fbb50ebbc29f3db1612dc645330f45f9491c0070512d9ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
