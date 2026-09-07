export const name="text-h-six-light";
export const id="dl_cd1904b4964a4da49384";
export const url=new URL("../icons/T/text-h-six-light.svg?v=e329af3999ecd04ade5909f9beeb1a3ff9e8461de6b87b53b86ac7aaaf628bd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
