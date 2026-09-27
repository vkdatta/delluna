export const name="file-vue-fill";
export const id="dl_03c43b83aa02402d9a38";
export const url=new URL("../icons/file-vue-fill.svg?v=0108631ea04d3b148d1b84d21c2e250d53075c6b5908a29fbac608dd0aba3240",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
