export const name="playlist-light";
export const id="dl_e1cf2b99ef5c4fd7bd11";
export const url=new URL("../icons/playlist-light.svg?v=3bd41370fea24d0dd23b766676b0b8699897dd9e938448d7cc8f6bd2bbb33d80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
