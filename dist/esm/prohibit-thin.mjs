export const name="prohibit-thin";
export const id="dl_f94e51608065436983e0";
export const url=new URL("../icons/prohibit-thin.svg?v=dd5a6ca2b8aca77599abdfcea4ba51131a747ba084f304ce5df28a595b1122af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
