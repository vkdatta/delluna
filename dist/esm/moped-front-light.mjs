export const name="moped-front-light";
export const id="dl_ce66b4a736e645959760";
export const url=new URL("../icons/moped-front-light.svg?v=62d0bc346660a6fccf85725c46fa5fd135ba368b4a8e3899d8d74083a475fc1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
