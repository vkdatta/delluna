export const name="emoji_language-fill";
export const id="dl_c994476f2d7b2bf06626";
export const url=new URL("../icons/emoji_language-fill.svg?v=460516494b173172c28262852babe3af2dceacf457363795431130e8ef755648",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
