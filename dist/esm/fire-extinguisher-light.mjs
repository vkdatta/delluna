export const name="fire-extinguisher-light";
export const id="dl_14c6af4fb71d4398b7a8";
export const url=new URL("../icons/fire-extinguisher-light.svg?v=2451248ee4f7869cbb57f9088ee2dda0ad3b207903054b94958dd198ff4d57d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
