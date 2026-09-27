export const name="scene-fill";
export const id="dl_712b28e1b3fc597d4e91";
export const url=new URL("../icons/scene-fill.svg?v=faa5a77885d55deeadb1bce093e0f46c52dbabe659faa07f91a0964ffd116f38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
