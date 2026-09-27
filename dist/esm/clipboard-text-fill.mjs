export const name="clipboard-text-fill";
export const id="dl_7af3792f92a443f08b90";
export const url=new URL("../icons/clipboard-text-fill.svg?v=4483e4aa4d984aec858b544e381863ae442bd8d8148959d23c3451268833f326",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
