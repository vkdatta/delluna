export const name="subtract-duotone";
export const id="dl_d88369e2e5217d466673";
export const url=new URL("../icons/subtract-duotone.svg?v=0be2769eacf4b33eca6ba836afa26b4d83cd412bac3c1b6bbd8540f9e7edf192",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
