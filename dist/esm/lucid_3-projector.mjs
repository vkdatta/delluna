export const name="lucid_3-projector";
export const id="dl_d6c54e8d283b46798170";
export const url=new URL("../icons/lucid_3-projector.svg?v=865df86df8010da6003aca6124ee350813c7a14fe6adbfecbedc22cb1130bf11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
