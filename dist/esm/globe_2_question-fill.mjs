export const name="globe_2_question-fill";
export const id="dl_be3d4ff004fe4115a2b5";
export const url=new URL("../icons/G/globe_2_question-fill.svg?v=5a8e6da8ecc73eb91057107a5d15247d3ca52e40cdff961897df6fd25734fe20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
