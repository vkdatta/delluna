export const name="music_video";
export const id="dl_e942fd0438933ec36f16";
export const url=new URL("../icons/music_video.svg?v=94f01500238dc9f3253bc1261d35cfb66864d7650cbba3364c2ea974de2cefe4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
