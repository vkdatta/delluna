export const name="vibrate-thin";
export const id="dl_55902fc151f351973ee9";
export const url=new URL("../icons/vibrate-thin.svg?v=9aa6c170f3be2b3430326bcc0707749a13a4630895015906f151c329d5ef6bba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
