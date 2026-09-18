export const name="diagnosis-fill";
export const id="dl_35c2a233d7ca49b6985a";
export const url=new URL("../icons/diagnosis-fill.svg?v=0b4e794361333a066cb424e7300cb05486a12c30e71bd7cef375b74d75a15de2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
