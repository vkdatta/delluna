export const name="tonality";
export const id="dl_886b835983c0b9b57cc0";
export const url=new URL("../icons/tonality.svg?v=ba203127278239c9b6773df83a294816dd0feebbb429c9028863a070fb195418",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
