export const name="link-thin";
export const id="dl_fd622d0d456044df995b";
export const url=new URL("../icons/link-thin.svg?v=2af319ba594892556fdd2aeff128cfcb9b5bd803be69004afd18ffede4bec46f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
