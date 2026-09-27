export const name="play-circle";
export const id="dl_016a689bfb634eb0b14e";
export const url=new URL("../icons/play-circle.svg?v=d3ef34f3c49e133742dd44d69ea0ff9a49801fb41d766ce2346be8e62fe3bc72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
