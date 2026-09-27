export const name="lucid_3-parentheses";
export const id="dl_3ddc25374b50446dac7c";
export const url=new URL("../icons/lucid_3-parentheses.svg?v=b570d52cc4450e00b27580fbfe262b8e6aca394c9579150e1f5b5d30069bf033",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
