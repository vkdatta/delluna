export const name="lucid_2-lightbulb";
export const id="dl_7e4352b67eae48fb8ad5";
export const url=new URL("../icons/lucid_2-lightbulb.svg?v=1bc47dd95479ae474d1cc088b6f4cfbfd398688bd4a5e2628e3eb02e07954e0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
