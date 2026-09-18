export const name="watch_vibration";
export const id="dl_c3b1f75bec65497cae0b";
export const url=new URL("../icons/watch_vibration.svg?v=67f6e0875c6667ba21115138aac308c86cf9db36cda3c40503f08c4660fa11b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
