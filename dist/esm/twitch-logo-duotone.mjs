export const name="twitch-logo-duotone";
export const id="dl_2ead72e2e9f7911018d5";
export const url=new URL("../icons/twitch-logo-duotone.svg?v=b4387b4065d1c66bd1871888a61c44ad4a04283dd6d0073832403ec53d71a04c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
