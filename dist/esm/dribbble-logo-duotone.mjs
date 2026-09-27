export const name="dribbble-logo-duotone";
export const id="dl_67cb0bbf9ff3460c9901";
export const url=new URL("../icons/dribbble-logo-duotone.svg?v=cc847ce9092ac6865502daa76c7de5d92cc5736fbb8dceb6bfddc8d90f264f3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
