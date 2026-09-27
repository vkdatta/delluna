export const name="emoji_transportation-fill";
export const id="dl_b1f4bd9be5d99f94cee2";
export const url=new URL("../icons/emoji_transportation-fill.svg?v=382ea8c315ea79d7125d21bb4834ff2359544a5ab4e47c8e766476ee74b25715",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
