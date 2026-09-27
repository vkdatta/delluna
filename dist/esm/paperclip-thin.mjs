export const name="paperclip-thin";
export const id="dl_588623c840dd4ab98d8c";
export const url=new URL("../icons/paperclip-thin.svg?v=f7b1b551d915c8dc809811a8179218ac058f9d2e90015e598f93d00424e94c34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
