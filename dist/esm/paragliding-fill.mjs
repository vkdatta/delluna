export const name="paragliding-fill";
export const id="dl_c1a873e96bc24bda9157";
export const url=new URL("../icons/paragliding-fill.svg?v=856caaf5b3fcd88e10cf3f1aec16b275e5f762b2ada2b4953b5b44403a33436d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
