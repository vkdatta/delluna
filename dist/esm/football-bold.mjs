export const name="football-bold";
export const id="dl_b284be2341534e71bde2";
export const url=new URL("../icons/football-bold.svg?v=36218ba8b81fd9c8b16e1b2db58e219af29235af72ff619adcbb19347a570935",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
