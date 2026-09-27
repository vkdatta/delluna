export const name="play-circle-thin";
export const id="dl_597cb935d880479d9ca1";
export const url=new URL("../icons/play-circle-thin.svg?v=9e4342eb1f1f86201b3d783c6355b20dfb6b5bb7e7a6995d4576e9cc47a0f703",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
