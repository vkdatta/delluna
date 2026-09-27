export const name="columns-plus-right";
export const id="dl_06b7601b71154008bd29";
export const url=new URL("../icons/columns-plus-right.svg?v=00540115f8f4e601d7f779230950a2315d5e3227a054c1bd54475ed53b97a82c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
