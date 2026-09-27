export const name="display_settings-fill";
export const id="dl_283c4f72ae6a821670ca";
export const url=new URL("../icons/display_settings-fill.svg?v=cd1820d5c21b0b6750c1b04d4c1328ede14831986b6ec510bdd6852feb75192f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
