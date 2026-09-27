export const name="sports_volleyball-fill";
export const id="dl_b7e346d989cc7b18fd66";
export const url=new URL("../icons/sports_volleyball-fill.svg?v=d230d58c399f3a0343f6941463bc87804b1276f6472620eac44cd688c2c8455a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
