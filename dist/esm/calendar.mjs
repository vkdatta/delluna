export const name="calendar";
export const id="dl_90621de83ad54a748cd3";
export const url=new URL("../icons/calendar.svg?v=1d481f472b1ea4b4a0bacacb88c715b41f9e20ff4b0df565df0373208302a725",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
