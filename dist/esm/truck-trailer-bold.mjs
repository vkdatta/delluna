export const name="truck-trailer-bold";
export const id="dl_58586b49391d4fe1ad17";
export const url=new URL("../icons/T/truck-trailer-bold.svg?v=a4c5d8af52348fb2bf8d112f2620b98246c3c08a978262f968fb281853c3a58a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
