export const name="car-simple-fill";
export const id="dl_69db1bc7fc1640eabe26";
export const url=new URL("../icons/car-simple-fill.svg?v=a8b7dedd6ab35ad1834e0f769db192953fd69d49ad93ef94bdc9665beb3c5a70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
