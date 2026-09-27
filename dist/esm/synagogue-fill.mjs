export const name="synagogue-fill";
export const id="dl_93403aacf290d28f188d";
export const url=new URL("../icons/synagogue-fill.svg?v=c50f7ca387edc09d9e61dec089e5f02382337c06e5f44ab93cb57389fcebb7d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
