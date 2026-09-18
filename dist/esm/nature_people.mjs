export const name="nature_people";
export const id="dl_f662adc46209427a8e2d";
export const url=new URL("../icons/N/nature_people.svg?v=51a988dd164325d9565937fcd865dfceb724c15ca1ed654ef3f02d9afdf924be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
