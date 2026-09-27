export const name="lucid_2-corner-left-down";
export const id="dl_4c054465bf3743589376";
export const url=new URL("../icons/lucid_2-corner-left-down.svg?v=a37d3343d2ca471823227b10ff1d6063e2053b479c4d8d24e27a401817f4b48e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
