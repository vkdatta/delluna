export const name="spade-thin";
export const id="dl_2e12b692cd52c47470d6";
export const url=new URL("../icons/spade-thin.svg?v=da29c77daf9e669a0d731f9537d37735549b7081986910985a01a0cc39cb81cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
