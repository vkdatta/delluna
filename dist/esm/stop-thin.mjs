export const name="stop-thin";
export const id="dl_a93ea99f9d103eb3db81";
export const url=new URL("../icons/stop-thin.svg?v=9866059a687234ce1eef45a78f5614626bfdfadc7d4761033fea4c9c3fc10beb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
