export const name="instagram-logo";
export const id="dl_ea049ec1aac443c4bdc2";
export const url=new URL("../icons/instagram-logo.svg?v=f284b410cdf872458e1ff6d92eb9e7a4794f87f9a5e16478cec02a23c27a8e94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
