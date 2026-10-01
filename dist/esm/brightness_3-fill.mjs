export const name="brightness_3-fill";
export const id="dl_6f8e9c9c44ab9553fdd9";
export const url=new URL("../icons/brightness_3-fill.svg?v=316fbce8eb222e4934a6baee0c3f98199c19ee2905dcad5f7bf4e5130a037644",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
