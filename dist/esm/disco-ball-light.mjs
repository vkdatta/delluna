export const name="disco-ball-light";
export const id="dl_c7dba6f76f014df4977f";
export const url=new URL("../icons/disco-ball-light.svg?v=28761ed50dedcb757dddacea2a523a78de4613b38c5caaf7591daed5bca2e849",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
