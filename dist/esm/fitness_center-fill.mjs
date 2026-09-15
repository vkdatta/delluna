export const name="fitness_center-fill";
export const id="dl_f3786f35da894275bedd";
export const url=new URL("../icons/F/fitness_center-fill.svg?v=7a7648d8b58313c012f4dcb4ff388820d072639fd9616848578e284da384c8c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
