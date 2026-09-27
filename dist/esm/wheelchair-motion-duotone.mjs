export const name="wheelchair-motion-duotone";
export const id="dl_44090ac6184c9d7d8478";
export const url=new URL("../icons/wheelchair-motion-duotone.svg?v=7d6a6555e00c36aac18167e43281e910151d500d9eeb7b272b845d60c74cfaba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
