export const name="calendar-star";
export const id="dl_c0c3317eea284ed99da3";
export const url=new URL("../icons/calendar-star.svg?v=a4bb4121d6c6de017d620ffae3628cd67fe1ba84cdd6747f88592a443593443b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
