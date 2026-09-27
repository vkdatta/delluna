export const name="key-bold";
export const id="dl_997d3b45825642a9b091";
export const url=new URL("../icons/key-bold.svg?v=c1acda2ebf63e722608e7bf08c2885ad687f839f3ec433bcf97481cb6af86567",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
