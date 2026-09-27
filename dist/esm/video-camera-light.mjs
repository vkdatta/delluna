export const name="video-camera-light";
export const id="dl_6f0ba3c83f3c1647b815";
export const url=new URL("../icons/video-camera-light.svg?v=779075bff7f4ee6c08ced939122553d11f459133f153627704d27fe876742030",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
