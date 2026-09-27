export const name="map_pin_review";
export const id="dl_f98c7cca3f76eb3e0d69";
export const url=new URL("../icons/map_pin_review.svg?v=83e4dc5bc522a19cffaab898a2f41e840194a0df509744ff0e91e7ec058ffba6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
