export const name="counter_3-fill";
export const id="dl_560ce4b827fa6a3a0c8f";
export const url=new URL("../icons/counter_3-fill.svg?v=f6b9dca958ae45b31e15b222319a6fcb6169df1050d400686ab65e4771330626",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
