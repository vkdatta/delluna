export const name="arrow-square-up-right";
export const id="dl_d69f4ef324f24536bf11";
export const url=new URL("../icons/arrow-square-up-right.svg?v=e093672b66dee66e8d02a6a0973cc71999f113a73d6296eb71c81d2d80de7b45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
