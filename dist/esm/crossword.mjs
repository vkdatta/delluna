export const name="crossword";
export const id="dl_94012461b98fb66e7319";
export const url=new URL("../icons/crossword.svg?v=b863bb0c4920e6149896d174624090922c15a3610fc35d47f63773563a9773f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
