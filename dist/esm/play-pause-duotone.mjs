export const name="play-pause-duotone";
export const id="dl_2d293f6ddb624220bac5";
export const url=new URL("../icons/play-pause-duotone.svg?v=c12353ce0791eef6e7a71c59612c26f4f6f95b0009d2c404d42011b0df9aa773",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
