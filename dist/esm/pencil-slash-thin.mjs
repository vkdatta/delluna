export const name="pencil-slash-thin";
export const id="dl_401ac3f7fffa40b69b27";
export const url=new URL("../icons/pencil-slash-thin.svg?v=ba6ce0ab5b150b02708159bfb6dc54635abe9b32788f16128501ecd061c8b420",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
