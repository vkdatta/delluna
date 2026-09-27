export const name="download_done-fill";
export const id="dl_7e548914aed12f2c2ef3";
export const url=new URL("../icons/download_done-fill.svg?v=c5efe0aa70f58603ae806ef5cd34b3b450e45c8e4cb02b126a07472177006acc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
