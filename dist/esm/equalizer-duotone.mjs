export const name="equalizer-duotone";
export const id="dl_938ab762ed27419fbb30";
export const url=new URL("../icons/equalizer-duotone.svg?v=20e3663ab7824cfbf6be537a97ec5989cf2466d297c25014059640e3095211ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
