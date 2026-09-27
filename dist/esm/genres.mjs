export const name="genres";
export const id="dl_5a1f55dacdb197336069";
export const url=new URL("../icons/genres.svg?v=fe2b10367ca7a6c27c2521db4a5a03ef6d9c01c9e3a36436f3e920e46863d0d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
