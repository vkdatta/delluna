export const name="dice-one-fill";
export const id="dl_2f62ae1fb67849df9dc8";
export const url=new URL("../icons/dice-one-fill.svg?v=9ba26716c1764a160316bf9fd59abb971bb520e287b0a96bded0ae58ec392a4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
