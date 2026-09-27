export const name="visibility";
export const id="dl_3544f2595002f2a088ea";
export const url=new URL("../icons/visibility.svg?v=3d81a3ab654b7ca3b84bb4746ed8718b20decf22b82d0697854add69f04aed98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
