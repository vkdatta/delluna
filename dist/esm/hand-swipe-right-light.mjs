export const name="hand-swipe-right-light";
export const id="dl_9f485025cc7d445d8e58";
export const url=new URL("../icons/hand-swipe-right-light.svg?v=26364f39f48ab6cce4e6368c66a5cabc6fbcb06f19acb1ddf6821a96fb61ddfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
