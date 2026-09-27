export const name="frame_bug";
export const id="dl_294a5a74543777a048f5";
export const url=new URL("../icons/frame_bug.svg?v=7deee642559690a4c71862235551e2b06de01657fc61342138ce8f33a0602e41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
