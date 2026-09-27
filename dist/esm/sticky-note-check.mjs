export const name="sticky-note-check";
export const id="dl_cad95a78ead4431ea7b6";
export const url=new URL("../icons/sticky-note-check.svg?v=d933242f11d188a93a58c19b4c6627671d4a9b65cb0dda5df70bc838bebc54c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
