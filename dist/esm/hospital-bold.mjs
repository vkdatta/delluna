export const name="hospital-bold";
export const id="dl_d1ba836885d741daaee0";
export const url=new URL("../icons/hospital-bold.svg?v=ffb3945209cd815c65c29315f44d14ffda228fd21a1d930e6953b786fb933ba5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
