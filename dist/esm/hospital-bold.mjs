export const name="hospital-bold";
export const id="dl_d1ba836885d741daaee0";
export const url=new URL("../icons/hospital-bold.svg?v=27e254266f2d3c11ff13cb88df08566c18efbd8ee0dc074d338442f896e71f83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
