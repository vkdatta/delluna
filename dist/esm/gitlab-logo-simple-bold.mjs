export const name="gitlab-logo-simple-bold";
export const id="dl_cfd0f554be604b5da9bd";
export const url=new URL("../icons/gitlab-logo-simple-bold.svg?v=10ed35ad0081ff3164e5ac118a9da214c5961917ad376d26ae2e4001f7d156c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
