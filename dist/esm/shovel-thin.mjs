export const name="shovel-thin";
export const id="dl_fb735455bd6f498490dd";
export const url=new URL("../icons/S/shovel-thin.svg?v=4370a7a69bb9feee37a098b13169e2db4b2f811796c3a347779f812ccf41fa8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
