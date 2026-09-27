export const name="car_defrost_left-fill";
export const id="dl_c961cb58a198c451c20a";
export const url=new URL("../icons/car_defrost_left-fill.svg?v=20c1454df0cae85dd41fecbc542f55655ba052981f7acf8b92475d0ca61cce2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
