export const name="gear-fine-thin";
export const id="dl_6f20a27c591140e8949e";
export const url=new URL("../icons/gear-fine-thin.svg?v=d61185e336cf28881e0b53b6846b13c880ca4fecc5dda41235ebfa0bfbae52e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
