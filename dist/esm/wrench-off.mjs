export const name="wrench-off";
export const id="dl_94e746d8452641a78b2d";
export const url=new URL("../icons/wrench-off.svg?v=4fe6f36de147e0f9e70cd7dee8b51e50867ada65ca2a0810f2324ab3b2792f8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
