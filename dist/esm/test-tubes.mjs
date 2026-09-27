export const name="test-tubes";
export const id="dl_2b1a2a69c29f4ec68503";
export const url=new URL("../icons/test-tubes.svg?v=5112741980a9334fe335741a665a5c75139f26667b1aa3f252a5188b2a785ac6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
