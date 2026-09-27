export const name="pause_presentation-fill";
export const id="dl_cd6887f67fa0c156b2fd";
export const url=new URL("../icons/pause_presentation-fill.svg?v=7522516aa6a7998fdfa9e731decb395b275faadd8d2ad31ab11851c4d4615f4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
