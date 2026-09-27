export const name="shield-light";
export const id="dl_62ffee9c820fdc47f280";
export const url=new URL("../icons/shield-light.svg?v=829a92dd0db6e578fc8136d6378c44d585d054f963f6fd5541645993d38c1bd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
