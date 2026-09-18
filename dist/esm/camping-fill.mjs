export const name="camping-fill";
export const id="dl_9c44eeb903b9405d953f";
export const url=new URL("../icons/camping-fill.svg?v=c11eebe0b9585b5f9228476c5b1d740c609c70ea35b3de4c5cd18a16d2015ad1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
