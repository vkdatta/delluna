export const name="person-simple-bike-fill";
export const id="dl_a018bc5856ce4820b93e";
export const url=new URL("../icons/person-simple-bike-fill.svg?v=9f61b8ed3f118f595a41cb94ba3f0134a97220771f4ba9a7e2ad6fd2f18c168f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
