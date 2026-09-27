export const name="zodiac-aries";
export const id="dl_259ed9ec0ccd4c34b614";
export const url=new URL("../icons/zodiac-aries.svg?v=1d22a482202ab81873fcc97db892ff277953c928f2fbdd444259659b3b729332",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
