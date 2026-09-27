export const name="highlight";
export const id="dl_05b6245ac90bcb9475b1";
export const url=new URL("../icons/highlight.svg?v=4e2153a3ec6654d06b36be7ca49bb3e8b8ff7c3b110a23c252c9d00598168e11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
