export const name="hourglass-medium-light";
export const id="dl_f06d4925789b4922a947";
export const url=new URL("../icons/hourglass-medium-light.svg?v=6927fc5bcc2007bdc049bb89e4ad5bfbc5e1a54b29eb570694c4c3dcf331fd08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
