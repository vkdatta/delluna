export const name="person";
export const id="dl_57ec802ce93569710a00";
export const url=new URL("../icons/person.svg?v=733f760cea5c1bba196e2424c2d55826cf295de40b4ef784af0dc0575139cbb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
