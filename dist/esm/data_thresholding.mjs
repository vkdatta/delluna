export const name="data_thresholding";
export const id="dl_6328dd0c9d13c6ab4634";
export const url=new URL("../icons/data_thresholding.svg?v=94a1a11f7869919d38eef870dde183a833d3f687bf8af82b17bfd475e22844d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
