export const name="columns-plus-right-thin";
export const id="dl_08d34328202647f4b8d0";
export const url=new URL("../icons/columns-plus-right-thin.svg?v=bc3318960bcb70f65ab39bd9982bcc640207c7718c74a61e9c9629fda0910d2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
