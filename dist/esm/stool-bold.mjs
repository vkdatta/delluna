export const name="stool-bold";
export const id="dl_e298d77b776196c809f1";
export const url=new URL("../icons/stool-bold.svg?v=e37b0470435625b30109b941318d472c7c8367c86c7a83fb3c730133e384f809",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
