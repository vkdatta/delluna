export const name="cable-car";
export const id="dl_14a2b5b1917c48afb3a9";
export const url=new URL("../icons/cable-car.svg?v=f0b6ccf9939efbd544a350d1ad612500a9ab8a941aa15f7ef7893d83e3919987",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
