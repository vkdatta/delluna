export const name="subject";
export const id="dl_6317dc0a952d4976a2f3";
export const url=new URL("../icons/subject.svg?v=3912d44e3a12e0591e77600589eff5ff068beb080a87b63563364183f9a17d52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
