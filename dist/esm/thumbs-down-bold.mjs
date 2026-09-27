export const name="thumbs-down-bold";
export const id="dl_94c673da5a8fe449ee6a";
export const url=new URL("../icons/thumbs-down-bold.svg?v=20c155f1d2624775048b26fb209828e4f0ea02fc8666aa7a90cb447f5e1c0208",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
