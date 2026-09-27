export const name="arrow_shape_up";
export const id="dl_cdb2fe80f435238c77ec";
export const url=new URL("../icons/arrow_shape_up.svg?v=272fe5319c979c114243a4b2c94f4ad3da6bbb1d3a426ef93929792884452d43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
