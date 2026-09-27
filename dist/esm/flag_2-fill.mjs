export const name="flag_2-fill";
export const id="dl_37e038b3cd9df73373ca";
export const url=new URL("../icons/flag_2-fill.svg?v=c1d500dbbd85dc0e9834e75e4277dbdd3c5e056f4977ad81d75473577e6091a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
