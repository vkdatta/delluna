export const name="lucid_1-circle-power";
export const id="dl_f96c54d0105047ce84e7";
export const url=new URL("../icons/lucid_1-circle-power.svg?v=8e9457f4854077075ef64f4e6661d59ae50e3bd77bc09065aa2eddbf87038ea3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
