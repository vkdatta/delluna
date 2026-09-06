export const name="calendar-plus";
export const id="dl_08055d559c574cdf804f";
export const url=new URL("../icons/calendar-plus.svg?v=c9799e0708c591545412e9bd75f1c014a2de6da91e363b38f30c6ac37bb9432e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
