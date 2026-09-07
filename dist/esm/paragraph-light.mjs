export const name="paragraph-light";
export const id="dl_8d41898305264a9a82bf";
export const url=new URL("../icons/paragraph-light.svg?v=03eaf2df841a638d47ceb36beac131473abe8c14808d736fb6082f1dfc347033",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
