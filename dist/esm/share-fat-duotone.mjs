export const name="share-fat-duotone";
export const id="dl_1c922c11ff5b5024ba8f";
export const url=new URL("../icons/share-fat-duotone.svg?v=e0da42d9c2c19fc5ed81a7ab93243dfeb4d6fcae2651f8b68e858d94e31e9b63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
