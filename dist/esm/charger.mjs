export const name="charger";
export const id="dl_7e055fc7c35cc5432fca";
export const url=new URL("../icons/charger.svg?v=55334b2d78fd6d6498be28c215e7f9f9a82b9a9cd1da694d4ac50f921705eed4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
