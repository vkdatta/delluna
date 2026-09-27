export const name="archive-light";
export const id="dl_81cea3f28d0a49218f59";
export const url=new URL("../icons/archive-light.svg?v=4b00ac53ff8e2dbf88ee02cf4e5a4b73e3d63f406de5cf3e7feffc6f627dfe4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
