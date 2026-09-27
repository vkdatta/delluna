export const name="disc-light";
export const id="dl_e5c5a8593b564eae9f31";
export const url=new URL("../icons/disc-light.svg?v=de3f7fdf2b292e1a96065ca2a02009fff0a3d24a7aaeb96b77808dff3d6b48dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
