export const name="ear-slash-bold";
export const id="dl_bb2138afc0484928bb88";
export const url=new URL("../icons/ear-slash-bold.svg?v=5c7c6b9be0242446d91ed878abfaf45647e34ae3eb441f8960b9bc4e866d708f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
