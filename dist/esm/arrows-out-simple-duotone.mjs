export const name="arrows-out-simple-duotone";
export const id="dl_882179cb25d84332b111";
export const url=new URL("../icons/arrows-out-simple-duotone.svg?v=30285cd178a3a991b274a391466884c9b4b67e970437ea304b8e9823152696d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
