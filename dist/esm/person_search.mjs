export const name="person_search";
export const id="dl_ca481b7d88c6fdc45fc9";
export const url=new URL("../icons/person_search.svg?v=74145fdd85ed8e99f9f6ac72494939ffa5903f6af16ad8efa59190a79b7bd88c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
