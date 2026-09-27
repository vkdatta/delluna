export const name="airplane_ticket-fill";
export const id="dl_6ac3a4830f1a67e4ba19";
export const url=new URL("../icons/airplane_ticket-fill.svg?v=04292c99064633a0a694dd98891863e6092829fb3a4e7215ce855d9b86c401de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
