export const name="service_toolbox";
export const id="dl_3a2e84d2b0c7e775f9b3";
export const url=new URL("../icons/service_toolbox.svg?v=57e63cf569153581e369cd0cbea13b204db003dd73b6ae4a14f279de027e981d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
