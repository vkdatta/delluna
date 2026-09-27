export const name="building-apartment-duotone";
export const id="dl_f17670e1285344e1b3de";
export const url=new URL("../icons/building-apartment-duotone.svg?v=ef5ce41c44cf46690e4e4e88e7ae6885fdd942d7589213884bd9b51cbda056b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
