export const name="first_page-fill";
export const id="dl_3dcf3aaa080ecc1dea84";
export const url=new URL("../icons/first_page-fill.svg?v=41bb694546db1916e8cbdf15be0bdfc92d383bed43ea6cfcaa053359881a8d26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
