export const name="labs-fill";
export const id="dl_1d0a9e31215c0867cdd4";
export const url=new URL("../icons/labs-fill.svg?v=934e7a86bbb1c1f61490eaa658f9ff1b1942dc597aa118813df4b559ea36942e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
