export const name="calendar-star-fill";
export const id="dl_83bb09e996ca49eaa875";
export const url=new URL("../icons/calendar-star-fill.svg?v=5edd35376062815e1bbece68ec249fa63153df3233720d5f7155e8b32ef36eec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
