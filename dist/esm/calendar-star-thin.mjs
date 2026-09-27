export const name="calendar-star-thin";
export const id="dl_0664e955970a4e3abd9f";
export const url=new URL("../icons/calendar-star-thin.svg?v=50b1a835ab0ad691e9b6951d6b4041c8acf475d97ef911859c077a64fada9293",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
