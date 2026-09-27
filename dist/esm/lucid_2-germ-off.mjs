export const name="lucid_2-germ-off";
export const id="dl_e182afe6b140406fa1fa";
export const url=new URL("../icons/lucid_2-germ-off.svg?v=72457c9e2121bb8834e7e909417a6aaa728383ceb7c0bb10afc552526cf14dfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
