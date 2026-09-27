export const name="circuitry-thin";
export const id="dl_a5f026dda3ec4a34975d";
export const url=new URL("../icons/circuitry-thin.svg?v=a32cec1c100dd14aaa7e311d120ec9b662a13c2eac5a35a6bb4a7ffc317a4b14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
