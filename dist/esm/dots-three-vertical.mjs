export const name="dots-three-vertical";
export const id="dl_1612067386004e3abbc5";
export const url=new URL("../icons/dots-three-vertical.svg?v=00e3a362f8d5e36e61398d45e42ddd2a8968215a03f9caf11359d03ebb5fb92e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
