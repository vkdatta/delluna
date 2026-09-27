export const name="drone-bold";
export const id="dl_1b0d2f07217c41a29c81";
export const url=new URL("../icons/drone-bold.svg?v=3d027b9f59f6edd62c807bc59fe8418ba7c21a66b11c5ce92087acff4b9350b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
