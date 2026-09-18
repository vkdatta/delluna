export const name="video_chat";
export const id="dl_c3e9178e184f4d759b04";
export const url=new URL("../icons/V/video_chat.svg?v=36b385262e8e30fcb0cb2ff138fad6e34381036df76937f9db71252775deec15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
