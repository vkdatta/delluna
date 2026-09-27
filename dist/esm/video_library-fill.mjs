export const name="video_library-fill";
export const id="dl_3d4b07de9fc2e9be1081";
export const url=new URL("../icons/video_library-fill.svg?v=63c32649c0d9dc193c96eee3490bcd25a4370547d22ac31800f6bf948110c517",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
