export const name="home_health";
export const id="dl_42671d22512840a6b743";
export const url=new URL("../icons/home_health.svg?v=bf720692ceada791b96281b3d3561b924e5a64ff8d2f62d56850df838b39d715",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
