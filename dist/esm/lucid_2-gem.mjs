export const name="lucid_2-gem";
export const id="dl_305910eccb354f089d79";
export const url=new URL("../icons/lucid_2-gem.svg?v=1e517ecd803cefcd0820878e74e1eb441366477d5b4a9dbfecb6c9504298d194",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
