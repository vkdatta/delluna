export const name="gps-slash-duotone";
export const id="dl_7203958c9a534f3a8e85";
export const url=new URL("../icons/gps-slash-duotone.svg?v=c532502c1312b452490052579dc2211d761e84b800af4c3556472ad875b53dd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
