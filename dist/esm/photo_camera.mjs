export const name="photo_camera";
export const id="dl_8494c9eda93d4cb98341";
export const url=new URL("../icons/P/photo_camera.svg?v=88a1d32ae3dff49b7b145cb39f9a3ba9ab9df14446c9e1a9db6bf25408f8d176",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
