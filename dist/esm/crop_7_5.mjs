export const name="crop_7_5";
export const id="dl_210406c3b9d74d9ea6c8";
export const url=new URL("../icons/crop_7_5.svg?v=e69cee0723a6af4cd0a0dde4ff95432fc11fb9e744b9d9acd0be42434151a025",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
