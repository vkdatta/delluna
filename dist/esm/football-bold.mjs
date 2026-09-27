export const name="football-bold";
export const id="dl_b284be2341534e71bde2";
export const url=new URL("../icons/football-bold.svg?v=53980ced6c71eaf14a61e647662511c3d0420aabaffaf1ae1e87d7318f90ac20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
