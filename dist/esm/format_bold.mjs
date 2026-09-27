export const name="format_bold";
export const id="dl_7d9a8da877397b76264d";
export const url=new URL("../icons/format_bold.svg?v=e8e785adaff9f3a05cc5def762caff66f9fd2b0ac0f6950044424215081d67ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
