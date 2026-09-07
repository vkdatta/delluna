export const name="seal-bold";
export const id="dl_e9279010151f4299ba88";
export const url=new URL("../icons/S/seal-bold.svg?v=cc12cf11a8313fe8aea47d2739c97db95ff3d13ff49ec634ab666817069afcfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
