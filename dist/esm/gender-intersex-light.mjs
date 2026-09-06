export const name="gender-intersex-light";
export const id="dl_d9327b07f2af416db57e";
export const url=new URL("../icons/gender-intersex-light.svg?v=cb0a9580260d47c83f21b1b732d64c455d7a82c5e92f97434775a6773c3fe5d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
