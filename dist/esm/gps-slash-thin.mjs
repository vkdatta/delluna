export const name="gps-slash-thin";
export const id="dl_3d3eae54461c401c902f";
export const url=new URL("../icons/gps-slash-thin.svg?v=8c16e781d675f17f6fcbc96580501c6a43b72833c4670dc6cf9d5bfea0b6fce4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
