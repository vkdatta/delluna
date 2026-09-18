export const name="language_pinyin-fill";
export const id="dl_6b0cff70c40543cc99f9";
export const url=new URL("../icons/L/language_pinyin-fill.svg?v=a741de662bb9389f83d4ad225d581b443fe3c3aa4baabc6354f525778afdda89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
