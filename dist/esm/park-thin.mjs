export const name="park-thin";
export const id="dl_4cf5525c8dde42b9be45";
export const url=new URL("../icons/park-thin.svg?v=791f74e351d1933df02b95be73b88ecc8cfa43f8bae72b9481de80c5037b1219",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
