export const name="mic_external_on";
export const id="dl_8e1db020955b5efc5092";
export const url=new URL("../icons/mic_external_on.svg?v=fe701f30df3c6364feac99558dd8183f7eb07ffbc671b3b46e389f81a2fc8b37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
