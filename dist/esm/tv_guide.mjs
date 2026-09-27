export const name="tv_guide";
export const id="dl_217551d1c563e98a434d";
export const url=new URL("../icons/tv_guide.svg?v=91b3947f09354c2a5e46e3047428bb55626f8ff542ced471c8ad19c7baeaf7ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
