export const name="anchor-simple-thin";
export const id="dl_626dd07ceb9748668493";
export const url=new URL("../icons/anchor-simple-thin.svg?v=9695d77ed65a763bc3adb52bdeeea5ad6aeacf92f07e76b2f095a9e24e5153b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
