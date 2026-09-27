export const name="person-simple-run-duotone";
export const id="dl_9be83f8844644a9fb176";
export const url=new URL("../icons/person-simple-run-duotone.svg?v=332a54c1ec81b897a7c26f9fff44d0ddacba7a9debe2b62732ebdb5b4d7023e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
