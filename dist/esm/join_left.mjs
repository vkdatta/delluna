export const name="join_left";
export const id="dl_667284913547a2ef8c2e";
export const url=new URL("../icons/join_left.svg?v=405c73bef03b7299e79a7bc21aef0c5a55a4e4dda8ef5d30bf109a53aacc692b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
