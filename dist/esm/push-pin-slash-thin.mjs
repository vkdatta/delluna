export const name="push-pin-slash-thin";
export const id="dl_fb3e677af094448c890c";
export const url=new URL("../icons/push-pin-slash-thin.svg?v=4cbaef31893fec81550c9fa73f1cf30672f82299b05268acba26ef3bd856e5c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
