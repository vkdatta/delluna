export const name="push-pin-slash-bold";
export const id="dl_26335b4423584d8c88e0";
export const url=new URL("../icons/push-pin-slash-bold.svg?v=02cc847388de37353635d8f6ef0483bd8038728c70f57de854579d1d7c188c5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
