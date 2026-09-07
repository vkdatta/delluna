export const name="sunglasses-fill";
export const id="dl_49c017b98fed4da687e9";
export const url=new URL("../icons/S/sunglasses-fill.svg?v=669f8498885642c06879fbc73a580a1504907b4df50b22ad073e86fbd6cd36e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
