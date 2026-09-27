export const name="text-indent-light";
export const id="dl_02c8d280b57331d64208";
export const url=new URL("../icons/text-indent-light.svg?v=02299757c7aee787820e3fe0a2fd3d3a09f29386d3db673082cec10249f65c35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
