export const name="article_shortcut";
export const id="dl_9dd5833c724a459155fb";
export const url=new URL("../icons/article_shortcut.svg?v=39f05189891af83c3076ad865b1ad1f2b4c015ae21dedf4f94d8b8cf2a2b4d47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
