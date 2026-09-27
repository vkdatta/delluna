export const name="lucid_1-circuit-board";
export const id="dl_4b15e598f43f4bbc9d46";
export const url=new URL("../icons/lucid_1-circuit-board.svg?v=7a899e14716fc31b6c793884cd11507c9b9c20559ddd7bcc058955ca810bdfa6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
