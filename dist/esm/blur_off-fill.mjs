export const name="blur_off-fill";
export const id="dl_e8a0163cd90f423acb45";
export const url=new URL("../icons/blur_off-fill.svg?v=ddf1b61817d9ea0d221b69bc806bec7afd926d2e94b93a380337d847821ffa58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
