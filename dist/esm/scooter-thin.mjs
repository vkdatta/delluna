export const name="scooter-thin";
export const id="dl_6bf9f83f937744a3a36b";
export const url=new URL("../icons/S/scooter-thin.svg?v=5bf6c578dc81ab64465491dde51b270d7ed986fe2989f6bae4541847677ef12c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
