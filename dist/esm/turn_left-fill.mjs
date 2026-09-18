export const name="turn_left-fill";
export const id="dl_60c6ca951cfe44e7bdc9";
export const url=new URL("../icons/T/turn_left-fill.svg?v=7586f385ede87a8956eded540afec521502c76ebf7a17db26d6f53d25f6395d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
