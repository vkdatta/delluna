export const name="calendar-dot-duotone";
export const id="dl_7ef728495af24b1e9474";
export const url=new URL("../icons/calendar-dot-duotone.svg?v=7c787d825be7e2118f77041a32f6cb45ac867e929cb89982ffcbf8c8e2bd9024",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
