export const name="hourglass-simple-low";
export const id="dl_debbff1ca68d4dc68f37";
export const url=new URL("../icons/hourglass-simple-low.svg?v=018b2a77ed70f2f7f4af4a1dbb7241f10cde184398f7161bad9f98432132f328",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
