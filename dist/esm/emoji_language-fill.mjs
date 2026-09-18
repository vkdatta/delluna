export const name="emoji_language-fill";
export const id="dl_5189a5f3b12d454ebdbd";
export const url=new URL("../icons/emoji_language-fill.svg?v=b466c44bb75a85df3350db8bf9b912878c92a092d5679876ddffde34438aa765",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
