export const name="styler";
export const id="dl_1f6aa9430899950cadd5";
export const url=new URL("../icons/styler.svg?v=4e5f600fc0020f183711d6257fece03a6e4542759da37ea2adfddc46df2ea3f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
