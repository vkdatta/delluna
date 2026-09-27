export const name="twitch-logo-thin";
export const id="dl_b04a43eb726890a11950";
export const url=new URL("../icons/twitch-logo-thin.svg?v=6cd55b2ba57df8accb6fa9d5d51dbd38cf3e4cbb398d6e38f7fd3bec6090e09d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
