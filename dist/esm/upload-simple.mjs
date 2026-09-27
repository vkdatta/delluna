export const name="upload-simple";
export const id="dl_378cc8e0653ca11fc064";
export const url=new URL("../icons/upload-simple.svg?v=d2b22b75affd718a4a24d71ee71586b277cf48ddb7d52b7d7d0a85b47f8b12d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
