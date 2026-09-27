export const name="screenshot_tablet";
export const id="dl_d7bdd9bcdef1094be870";
export const url=new URL("../icons/screenshot_tablet.svg?v=474079975a91a954c2951dd02e91cc991ae1aef37bd5ea7934dd2ef59330c3d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
