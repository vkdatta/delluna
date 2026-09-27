export const name="60fps";
export const id="dl_448e771d86af42649c1a";
export const url=new URL("../icons/60fps.svg?v=4a66e9480ca5bb83e9453746e5424213b40de02d13dd8225eb859b354ebcd0b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
