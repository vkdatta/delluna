export const name="gitlab-logo-thin";
export const id="dl_132ee5a615414beb8113";
export const url=new URL("../icons/gitlab-logo-thin.svg?v=3da6975be1fb8a10baacf658c5a2d7ab36901c0d53ccfada38822bea511771f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
