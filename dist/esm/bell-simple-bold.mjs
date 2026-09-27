export const name="bell-simple-bold";
export const id="dl_9c847f81d6374a87acb3";
export const url=new URL("../icons/bell-simple-bold.svg?v=76d302a03db6051449854003d50d9e72dbcee5b0c7ddcf652bf3b6ebefa1f536",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
