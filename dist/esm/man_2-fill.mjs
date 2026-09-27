export const name="man_2-fill";
export const id="dl_c1673227df289a84f64a";
export const url=new URL("../icons/man_2-fill.svg?v=dab23b493d6691cc5f03945e7acee607ea64ff627e864455f38fbadf419189df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
