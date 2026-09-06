export const name="hand-fist-light";
export const id="dl_4fd89d42e70d45d98c6a";
export const url=new URL("../icons/hand-fist-light.svg?v=c51668ac182ac64e9301c26ddb3c2870ba54f70d0f758048e56457f0d2d2a1c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
