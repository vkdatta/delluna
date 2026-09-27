export const name="plant-bold";
export const id="dl_48192036849648d88258";
export const url=new URL("../icons/plant-bold.svg?v=616beff5a7cd484fb523b607b1d1a75171f793ec0481abf429d0944c7137f3e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
