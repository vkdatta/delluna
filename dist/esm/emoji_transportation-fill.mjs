export const name="emoji_transportation-fill";
export const id="dl_30dec0d6b25c57e1e2ef";
export const url=new URL("../icons/emoji_transportation-fill.svg?v=03c812ab6c579d5a203e11149ea4ed8c6e4b76a370670b72c4f262ce657fad4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
