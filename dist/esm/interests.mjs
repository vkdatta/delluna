export const name="interests";
export const id="dl_5071ff7007e3193e15d0";
export const url=new URL("../icons/interests.svg?v=54da5dbf6b71ded4425c787cf4e118bbc43a245f93fc21f42d7e57277487713f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
