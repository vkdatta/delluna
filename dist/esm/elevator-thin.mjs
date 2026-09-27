export const name="elevator-thin";
export const id="dl_2f5494bd0fd249a7a9fc";
export const url=new URL("../icons/elevator-thin.svg?v=b0938580696e4fac7e1f890537de316b679a1e6e7d39f82fdf7364b7f40982c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
