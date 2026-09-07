export const name="egg-bold";
export const id="dl_36dbf2ca2d014fb89b4a";
export const url=new URL("../icons/egg-bold.svg?v=3c23bcc185b1aab8e66428816dc656254816d79f24835741ffe9c5b268b23b87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
