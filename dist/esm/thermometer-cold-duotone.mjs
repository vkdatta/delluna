export const name="thermometer-cold-duotone";
export const id="dl_9c49e4fcc8207fd777a4";
export const url=new URL("../icons/thermometer-cold-duotone.svg?v=b838bed8c12382501749737e87f777e8bace99e95fdb594ed903abf88f2edb22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
