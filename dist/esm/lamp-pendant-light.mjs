export const name="lamp-pendant-light";
export const id="dl_4b839dda48d540869a70";
export const url=new URL("../icons/lamp-pendant-light.svg?v=b37e68043d897f34d969fe2f1c2c23b02d25c19ff47abea2a0578322ea91ce93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
