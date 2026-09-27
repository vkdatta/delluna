export const name="question-mark-duotone";
export const id="dl_1daf8cb1c68a4ede8cc4";
export const url=new URL("../icons/question-mark-duotone.svg?v=8ec22412549f4104274e47b877d4fe70fa206a64d2353b1d619fdb09e3c9d317",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
