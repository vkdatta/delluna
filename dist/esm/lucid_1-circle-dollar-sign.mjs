export const name="lucid_1-circle-dollar-sign";
export const id="dl_ef1c0fcacdc94e969ca1";
export const url=new URL("../icons/lucid_1-circle-dollar-sign.svg?v=8f181f68ba0caf948ae0476b83a64fee9b0c30dc9c41258391ab79740b2d40cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
