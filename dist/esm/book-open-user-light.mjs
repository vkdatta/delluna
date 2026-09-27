export const name="book-open-user-light";
export const id="dl_087850a8de114ed691a2";
export const url=new URL("../icons/book-open-user-light.svg?v=8bd31cd85f2f023130f63b8a2e1ff384e9a0c2a8481491b0e408a33ef040e2d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
