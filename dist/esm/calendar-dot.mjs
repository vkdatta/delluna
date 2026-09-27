export const name="calendar-dot";
export const id="dl_a4e20c77685f4f98a123";
export const url=new URL("../icons/calendar-dot.svg?v=340fffbc80c1c1075d42a7cbd0ee1b87e163964af5f6c34b16a8954f5e0afcbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
