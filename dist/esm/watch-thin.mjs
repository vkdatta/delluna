export const name="watch-thin";
export const id="dl_77fec608326c46ed9a9d";
export const url=new URL("../icons/W/watch-thin.svg?v=67a802ca482ceee027fdff319d0fd4953550d56dce7ba50cfc84b833f149dd66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
