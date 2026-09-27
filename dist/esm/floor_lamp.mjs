export const name="floor_lamp";
export const id="dl_d8fbc0b6ffe71b6e8ce6";
export const url=new URL("../icons/floor_lamp.svg?v=96f8a3332165b03d1450407bb6260b6793f36ba799d6b615260907bf11bd8fc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
