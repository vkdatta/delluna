export const name="square-sigma";
export const id="dl_f9903258a8ab439a9f5d";
export const url=new URL("../icons/square-sigma.svg?v=ca37cf951f5494abbcde742efe1117a2296240268d5662873007fb255545f04f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
