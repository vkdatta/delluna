export const name="subtitles_gear";
export const id="dl_f29be64001063d04c8ba";
export const url=new URL("../icons/subtitles_gear.svg?v=5ca2863775c2aff4e77cb80db13d28f88c9dcaf388230885fba2bae596c74662",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
