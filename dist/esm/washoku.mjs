export const name="washoku";
export const id="dl_f1c906b4afddc3c66225";
export const url=new URL("../icons/washoku.svg?v=57d169c265013443840b041cd1724b8e3e5fc7a2f27ecbe311f9144de70601a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
