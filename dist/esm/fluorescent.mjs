export const name="fluorescent";
export const id="dl_c98684bfb6454229bfc3";
export const url=new URL("../icons/fluorescent.svg?v=7796cd4daeb491e3693d2c552169321da39282653e9d6be1ea93fbb4041bad77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
