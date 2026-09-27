export const name="file-vue-bold";
export const id="dl_a54dc2fa9c1d4d938d14";
export const url=new URL("../icons/file-vue-bold.svg?v=840d83fe090edacf1941b4fea3f30b1ea397f73a2996a24c7d423a2ac9697dc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
