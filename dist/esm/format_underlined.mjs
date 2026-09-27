export const name="format_underlined";
export const id="dl_ff55236163422def5eec";
export const url=new URL("../icons/format_underlined.svg?v=d7ff8f0268409cdfb5b8874d7b5463fc0569c852e5db262684b8bd9a421ac00b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
