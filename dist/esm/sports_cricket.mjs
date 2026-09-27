export const name="sports_cricket";
export const id="dl_3f2cd6e6472bc8fad7cc";
export const url=new URL("../icons/sports_cricket.svg?v=1f4231c789ab97028697f31c36857413e60dcbb1162d6e2951bc7c9479c79bc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
