export const name="escalator-up-duotone";
export const id="dl_ad272eb6e9fa475ba1c3";
export const url=new URL("../icons/escalator-up-duotone.svg?v=c47cb5d7450f69a928a854221c45f319c177ec0be96cfcd88c6b330a3b0d20f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
