export const name="electric_car";
export const id="dl_b28cd1c2ec733b3ea568";
export const url=new URL("../icons/electric_car.svg?v=3a66a905f7737c083dec3253d34c0e12513141e0bbea6410c623ded2439f3de1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
