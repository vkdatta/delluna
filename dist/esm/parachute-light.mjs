export const name="parachute-light";
export const id="dl_effad13ce91e497d87d2";
export const url=new URL("../icons/parachute-light.svg?v=59db3f169df1bbdd607cd484f29e82e16cdf45be2063a1217b952adc0a0af3dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
