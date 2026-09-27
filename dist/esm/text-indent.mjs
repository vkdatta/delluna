export const name="text-indent";
export const id="dl_936cafb16325dacb5113";
export const url=new URL("../icons/text-indent.svg?v=a34b8850e25942d163ae3f00466a04c4a7a8b52a6387413aab50d51132c7662b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
