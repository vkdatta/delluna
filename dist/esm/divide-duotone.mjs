export const name="divide-duotone";
export const id="dl_78bc51f527ed4cc6a4b7";
export const url=new URL("../icons/divide-duotone.svg?v=fee9efe48751c3b88b8d573fbff9596d961e1da5b3038fc304352f590450612a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
