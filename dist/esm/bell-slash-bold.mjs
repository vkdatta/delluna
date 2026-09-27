export const name="bell-slash-bold";
export const id="dl_a69c8ab8d84948769049";
export const url=new URL("../icons/bell-slash-bold.svg?v=626e4c5ef63cf026b379f8812b9be07eaa668f55f0e3acc683ee17dd77e08caa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
