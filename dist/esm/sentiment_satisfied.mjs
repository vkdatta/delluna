export const name="sentiment_satisfied";
export const id="dl_cec245e731f540bf9654";
export const url=new URL("../icons/S/sentiment_satisfied.svg?v=ae5fc25c708636df0b910284cd6b98516ad7cf94371441de88f783c9f1200e17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
