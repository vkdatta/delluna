export const name="emoji_language";
export const id="dl_05e0d3ee06626f314dbe";
export const url=new URL("../icons/emoji_language.svg?v=277b41bfdd8ae5cccadf45ac71cd504d534072d0248d31377a630a2d7f45b71b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
