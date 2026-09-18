export const name="tour";
export const id="dl_5a3e2562809b4ccba497";
export const url=new URL("../icons/tour.svg?v=67c60791e552548e27714f8eeb21ef045662b04eb7e6dbcfdf777adca6190eed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
