export const name="lucid_1-construction";
export const id="dl_162a671615e14ab486fd";
export const url=new URL("../icons/lucid_1-construction.svg?v=4967c7666cb979e0ab9cdb19d6bf1bfb52f70327418621cefdc11548031bdc4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
