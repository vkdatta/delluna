export const name="toys_and_games-fill";
export const id="dl_54c4e7e3d53e0a3c98d1";
export const url=new URL("../icons/toys_and_games-fill.svg?v=caec33d7110aeb1554bbcfc247cc0cc3ac423e86b6114a40d607ea181d55aa71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
