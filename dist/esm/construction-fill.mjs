export const name="construction-fill";
export const id="dl_de6c9c3680f65973af33";
export const url=new URL("../icons/construction-fill.svg?v=7fdb6e8f136c681c4480f4871f1e9a6f20724addf8f1efc547bab28b0294f287",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
