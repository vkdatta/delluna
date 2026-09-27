export const name="lucid_1-circle-arrow-up";
export const id="dl_b7747da2acda4e3fbec8";
export const url=new URL("../icons/lucid_1-circle-arrow-up.svg?v=9cc0c7609fcbed9c58de2002e141de1c13c0626c71877cb6f67fd99246eb6f2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
