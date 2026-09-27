export const name="gear-bold";
export const id="dl_98e688caa6204bb2a269";
export const url=new URL("../icons/gear-bold.svg?v=7a6b89ec582f893a57363abf321c039680c7410b049a0ce993cfdd4ff0e3c6d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
