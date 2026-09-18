export const name="pulmonology-fill";
export const id="dl_c7fbb5dedf0041fa989d";
export const url=new URL("../icons/pulmonology-fill.svg?v=7a065e94f2f66d21cad3be43ffb3b9bece1d592c0ad1d23b3322405570e19eae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
