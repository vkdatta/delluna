export const name="lucid_3-music-3";
export const id="dl_4b07387d1e874b00be03";
export const url=new URL("../icons/lucid_3-music-3.svg?v=c7a65f6bc51e5bc012e488ec3253aff1c1afacf8801c6617c52f18ad486a76e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
