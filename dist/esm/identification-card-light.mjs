export const name="identification-card-light";
export const id="dl_3bbfca8ea37145828e63";
export const url=new URL("../icons/identification-card-light.svg?v=f58c044e7fc5a6e79edd005543ecc68c13a2b063de8abb133b279f542eed38b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
