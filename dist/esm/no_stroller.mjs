export const name="no_stroller";
export const id="dl_00168d53057b4788afbc";
export const url=new URL("../icons/N/no_stroller.svg?v=ab201bac2123105eec7722f22b1a65eec0c2afb62218675430ed5b2fdce780dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
