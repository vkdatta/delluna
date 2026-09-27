export const name="motion_photos_auto-fill";
export const id="dl_7151a6562984995ab14c";
export const url=new URL("../icons/motion_photos_auto-fill.svg?v=c93c673a40a368a15baccc395fc6a15fccd9db636eb4241756cb1b31f6fd3a68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
