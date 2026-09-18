export const name="float_landscape_2-fill";
export const id="dl_34b277480d9848bea693";
export const url=new URL("../icons/float_landscape_2-fill.svg?v=337bf38d2d82bb0ec564f35fdf8e80143ba2bacb36ac4c46061be141437f5ce8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
