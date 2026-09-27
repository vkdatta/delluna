export const name="file-c-sharp";
export const id="dl_7b233248abcc4098909f";
export const url=new URL("../icons/file-c-sharp.svg?v=0aa30cd95fd407809093b089ea875f0133eb7535830a99c1c54a522a092e7b56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
