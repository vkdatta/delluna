export const name="balcony-fill";
export const id="dl_46642a628fd064b8e276";
export const url=new URL("../icons/balcony-fill.svg?v=fd422ca522456a5e207ed60c56a4fcc9913f6d8bb2316d014a6b61cb5506c02e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
