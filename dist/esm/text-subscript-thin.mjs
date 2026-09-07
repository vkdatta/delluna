export const name="text-subscript-thin";
export const id="dl_a211a66700734bff82d8";
export const url=new URL("../icons/T/text-subscript-thin.svg?v=61aafb392cba09aaf27111179f385ba54e4e448d30337e04c6af94845edbf1d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
