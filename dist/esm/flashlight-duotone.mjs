export const name="flashlight-duotone";
export const id="dl_a4665ff80bad45daada9";
export const url=new URL("../icons/flashlight-duotone.svg?v=d76b24257dac291b59eb5185463b428eeb3f6cb5813d6085442c69aba81cb30e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
