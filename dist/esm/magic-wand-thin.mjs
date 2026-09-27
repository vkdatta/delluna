export const name="magic-wand-thin";
export const id="dl_9888fb1952b64889844a";
export const url=new URL("../icons/magic-wand-thin.svg?v=27cceb744f0129d96084327383d17c0c71bfbb8c12847012ddaf3822b10bfa6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
