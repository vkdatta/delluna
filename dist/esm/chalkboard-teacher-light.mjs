export const name="chalkboard-teacher-light";
export const id="dl_943afb1cccd14ba998a5";
export const url=new URL("../icons/chalkboard-teacher-light.svg?v=e029d0be85d1c9db0a7d58bde09a0a95222bf7614a34a347f18efd33cd0d1569",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
