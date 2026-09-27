export const name="file-vue";
export const id="dl_61f6d5063d2e4dc68fe4";
export const url=new URL("../icons/file-vue.svg?v=bb0b2443eb5aee4c733092395e5285825359679738efde48ac64b2f9f8ea7157",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
