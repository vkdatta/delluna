export const name="text-superscript";
export const id="dl_5399eee1dda273c463b3";
export const url=new URL("../icons/text-superscript.svg?v=e71f30b62758b0ef0219ee15e42e5a07555b429455ed3b085831e8026bf9575a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
