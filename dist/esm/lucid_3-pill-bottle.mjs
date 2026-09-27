export const name="lucid_3-pill-bottle";
export const id="dl_95a22a608e3e4e09ba3b";
export const url=new URL("../icons/lucid_3-pill-bottle.svg?v=4ced9def21431301e206ee62c6aaa28694698f7a77d769eed166827ce601ed0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
