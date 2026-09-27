export const name="local_drink";
export const id="dl_a4502703264f27da9abe";
export const url=new URL("../icons/local_drink.svg?v=6413ac83c9b0759edd8e8b877d2f763693cf8315e1ffabff84013e1ac6a50af5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
