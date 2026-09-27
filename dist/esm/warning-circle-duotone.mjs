export const name="warning-circle-duotone";
export const id="dl_c87f9b3020d642eac169";
export const url=new URL("../icons/warning-circle-duotone.svg?v=d828e99b8743d1504cf9a689161b270c188c369ea3e671d352ddd0eeb09ed456",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
