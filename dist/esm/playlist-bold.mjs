export const name="playlist-bold";
export const id="dl_0ad0a923912940bc8e40";
export const url=new URL("../icons/playlist-bold.svg?v=8d9864bbdd544c73ae5cb69bab250460b2cd05742fed148695337b4858fbba25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
