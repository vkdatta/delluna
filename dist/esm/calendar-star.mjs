export const name="calendar-star";
export const id="dl_c0c3317eea284ed99da3";
export const url=new URL("../icons/calendar-star.svg?v=d3d71badb2dfe635bedd3bdc810dbce9488fb573cfa39bc92c07f728c3c30ec7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
