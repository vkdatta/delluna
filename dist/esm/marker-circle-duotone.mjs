export const name="marker-circle-duotone";
export const id="dl_17ef8c80d31c42f1b2f8";
export const url=new URL("../icons/marker-circle-duotone.svg?v=15e838d57621efe7af5c5062d23aff9f58b808ea65d2e9607cf05b767d0a869e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
