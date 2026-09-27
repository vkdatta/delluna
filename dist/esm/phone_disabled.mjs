export const name="phone_disabled";
export const id="dl_60fec0905de953c9f569";
export const url=new URL("../icons/phone_disabled.svg?v=6d20cc93dd15c714c7fd9830dc983e4799fa7efc798794c9ecad34258cd5e1cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
