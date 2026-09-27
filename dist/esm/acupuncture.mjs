export const name="acupuncture";
export const id="dl_0b55322d56f7ffba255d";
export const url=new URL("../icons/acupuncture.svg?v=44d7204c33b074cf328144d9d3c6a70b8a713f48389bd88f7b751fa71fac33f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
