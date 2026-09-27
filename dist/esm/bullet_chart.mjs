export const name="bullet_chart";
export const id="dl_c573e147c6384dcbe757";
export const url=new URL("../icons/bullet_chart.svg?v=66c02ce1ac6feed6506afe63d4b0c69653a1f3659581a2104cd8a15570739389",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
