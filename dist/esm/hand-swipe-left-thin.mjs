export const name="hand-swipe-left-thin";
export const id="dl_9b84a105037e43128bf5";
export const url=new URL("../icons/hand-swipe-left-thin.svg?v=434497e7b475f97ae0b478f5babdf71fadd1b54833bc6cff0d0b1caa35c50a91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
