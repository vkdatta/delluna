export const name="island";
export const id="dl_ced74f7b393b438cb870";
export const url=new URL("../icons/island.svg?v=e816c26037594df555fd929d56fa61a3e39790c132251b69fc4efff9df0fb988",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
