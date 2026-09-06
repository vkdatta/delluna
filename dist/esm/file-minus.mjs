export const name="file-minus";
export const id="dl_4208f31987894dbc9b69";
export const url=new URL("../icons/file-minus.svg?v=971398e697337f5594871fef9a9d2979d09a6b0b9ed8f32b17ace20fa54ec997",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
