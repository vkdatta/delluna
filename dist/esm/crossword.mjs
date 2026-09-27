export const name="crossword";
export const id="dl_6cf634a772c194de09a9";
export const url=new URL("../icons/crossword.svg?v=65fd12c67cf5524ee2e4071ddf0ad17f86a1347899c78b5fcd791d206dd5d2e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
