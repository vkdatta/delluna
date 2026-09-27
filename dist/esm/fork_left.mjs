export const name="fork_left";
export const id="dl_a13db262db030045a255";
export const url=new URL("../icons/fork_left.svg?v=9e5785627792cf53ef361a6170386e997e35bd516a5b36280b1fffaab17b503d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
