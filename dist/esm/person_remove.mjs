export const name="person_remove";
export const id="dl_a87ffc004d8e30cfc815";
export const url=new URL("../icons/person_remove.svg?v=3e6abd04638f48955e3998738156101c7dfefe184fd2d290bc61101c6c83e297",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
