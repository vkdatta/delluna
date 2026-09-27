export const name="hair-dryer-thin";
export const id="dl_e49e54b12bf642a0b30d";
export const url=new URL("../icons/hair-dryer-thin.svg?v=3f7f9a175c7bba530ecf1c514f90415c6a6507f1f6eb68fe63641dc35be60552",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
