export const name="youtube-logo-bold";
export const id="dl_82b0415f75f20dc118e7";
export const url=new URL("../icons/youtube-logo-bold.svg?v=db1b8a3233c811919b1abdc29c4af236726464f912fb1f58482086ee3777596d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
