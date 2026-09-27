export const name="thermometer-simple-light";
export const id="dl_060eb9624db8fceec3e0";
export const url=new URL("../icons/thermometer-simple-light.svg?v=d14605baa66e118a0db2de2cd7bd68932ad21193e729a83bda8a2487e6482779",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
