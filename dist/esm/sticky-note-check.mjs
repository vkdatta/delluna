export const name="sticky-note-check";
export const id="dl_cad95a78ead4431ea7b6";
export const url=new URL("../icons/sticky-note-check.svg?v=58815a8bc02468effc5e5fc93d2c66e889a895a97d64c8b5dbeb784673b57f8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
