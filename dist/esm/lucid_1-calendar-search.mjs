export const name="lucid_1-calendar-search";
export const id="dl_4b003cb0bbf04306bb41";
export const url=new URL("../icons/lucid_1-calendar-search.svg?v=0267edee7b5b63465b13b9079dcc291b9879abe1b91e771a4166a3511a141fed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
