export const name="award_meal-fill";
export const id="dl_c44025fd338b40a5a6fd";
export const url=new URL("../icons/A/award_meal-fill.svg?v=f80f41b84bd31957005fdf79ab9e011601e7941edd3412503c23e335a9c62673",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
