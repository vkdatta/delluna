export const name="calendar-blank";
export const id="dl_4d9fce0261394a8e8ee9";
export const url=new URL("../icons/calendar-blank.svg?v=2f93493ce08c6403a09977b4f83a940eaa61a361055a6ac4feecd06fc8948f90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
