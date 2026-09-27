export const name="volume_up-fill";
export const id="dl_59d785e31a6906e61ab6";
export const url=new URL("../icons/volume_up-fill.svg?v=9e13614ef8fa1cb676a56fd2e6ab10c6752e2acfd4666c4cd1f348c5364bb7ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
