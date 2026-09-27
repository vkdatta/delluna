export const name="ventilator";
export const id="dl_d21f1ac322178a557c4a";
export const url=new URL("../icons/ventilator.svg?v=5ca5f97c3ab4f0e6e339a36763b7e68c7ccb7aa47c45d8df8437bbe2b575638f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
