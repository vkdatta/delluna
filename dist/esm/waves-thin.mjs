export const name="waves-thin";
export const id="dl_cb816a8b8b7f7b4fcc40";
export const url=new URL("../icons/waves-thin.svg?v=9293d836128847f6ac11807f46e49a55d8f12e6619539c07435fe0af6070b9a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
