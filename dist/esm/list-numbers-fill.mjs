export const name="list-numbers-fill";
export const id="dl_a0431a3d3d7648b681ee";
export const url=new URL("../icons/list-numbers-fill.svg?v=ceb555064ecc90280081486d003d0a24a5df1a97b6f464bc9f8118bc1f8b56ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
