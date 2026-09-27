export const name="gitlab-logo-simple-bold";
export const id="dl_cfd0f554be604b5da9bd";
export const url=new URL("../icons/gitlab-logo-simple-bold.svg?v=09e9afdc5dff2cb1339cb7298f48d02544f0df75d2d390593e3c4cee707c0365",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
