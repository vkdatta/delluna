export const name="explore_off";
export const id="dl_862c954e889fa8b630ec";
export const url=new URL("../icons/explore_off.svg?v=37eafc1a25c919a0d9db86f37a85c8c5659652f1136cd19228bbe1101854981b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
