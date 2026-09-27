export const name="sports_volleyball";
export const id="dl_d28dc72f248ca2ffdcd8";
export const url=new URL("../icons/sports_volleyball.svg?v=c1a42812a26198ec004cdd84481692b705b52b70b3553d0dda37339308bbd59c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
