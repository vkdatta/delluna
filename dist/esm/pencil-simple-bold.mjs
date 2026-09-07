export const name="pencil-simple-bold";
export const id="dl_e4fb47f199d34553ab24";
export const url=new URL("../icons/pencil-simple-bold.svg?v=163a4e787655de6b5b50bfb0dc0e6818c015ba32106eb14fe12c3daf033a892b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
