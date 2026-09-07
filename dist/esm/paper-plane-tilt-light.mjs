export const name="paper-plane-tilt-light";
export const id="dl_353cd98826804644b525";
export const url=new URL("../icons/paper-plane-tilt-light.svg?v=17745c9e201fff79646c38185ff2f41b9dbc8d0e3ad3a3ebf35943ae62f9b31e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
