export const name="gender-transgender-light";
export const id="dl_cd27d8ec280a43328626";
export const url=new URL("../icons/gender-transgender-light.svg?v=cb7e6af4c8c3efc38c07ccd7dae35367d755e324c2d6f8580881915f29786eb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
