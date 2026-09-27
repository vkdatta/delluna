export const name="cell-signal-slash-fill";
export const id="dl_1f43fb4b2c2240618dfa";
export const url=new URL("../icons/cell-signal-slash-fill.svg?v=bb9232ab333a2c4c086b3a3505e1535a3c48e0429b5fab9a76355bcca7c2ba25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
