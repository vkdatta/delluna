export const name="fire-simple-duotone";
export const id="dl_6c7f99a3c30846c9a0f3";
export const url=new URL("../icons/fire-simple-duotone.svg?v=ff391b9c9d15fb8428b8aefb606df56396ec4a53e2cd80378fb628b8c213bbf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
