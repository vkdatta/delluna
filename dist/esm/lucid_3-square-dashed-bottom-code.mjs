export const name="lucid_3-square-dashed-bottom-code";
export const id="dl_e981aa004fe4410ba929";
export const url=new URL("../icons/lucid_3-square-dashed-bottom-code.svg?v=ccebccbd96190ee49b02d9c0d291a83c70e52a35724821668ba4f78e9b602371",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
