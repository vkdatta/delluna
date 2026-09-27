export const name="home_and_garden";
export const id="dl_c8d2eaf9a52221b0e602";
export const url=new URL("../icons/home_and_garden.svg?v=1916e188111e7d817e8864bd61580ecc9ca279f84e52fcfae784ba30b7677f5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
