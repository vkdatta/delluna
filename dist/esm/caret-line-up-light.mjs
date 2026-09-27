export const name="caret-line-up-light";
export const id="dl_82e73eccf65e48fab5d0";
export const url=new URL("../icons/caret-line-up-light.svg?v=53e26526efcfae77ef770208694b45f9344fd396cbc547aec74b92eff5517a20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
