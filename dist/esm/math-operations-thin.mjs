export const name="math-operations-thin";
export const id="dl_81fa4ee03d9346acbd68";
export const url=new URL("../icons/math-operations-thin.svg?v=2da9b8224a3fdf813e1ea9c806fdbd62118e63976312bc12d94b31bf43711ec6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
