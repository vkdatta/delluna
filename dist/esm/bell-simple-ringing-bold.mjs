export const name="bell-simple-ringing-bold";
export const id="dl_4b8e188e6ff3402fab05";
export const url=new URL("../icons/bell-simple-ringing-bold.svg?v=9c0090b324e0dc0c22fceaa38a947b52c3689cd2645d6ae70236a7717ba6e613",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
