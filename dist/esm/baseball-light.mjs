export const name="baseball-light";
export const id="dl_04183be94f7442808ddc";
export const url=new URL("../icons/baseball-light.svg?v=1d01c2cbe7a621bb16bb73baedd144962f9654818da7653b31b0892b29331862",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
