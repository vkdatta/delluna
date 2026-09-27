export const name="hexagon-thin";
export const id="dl_74fb8f7fbdf04ccb9861";
export const url=new URL("../icons/hexagon-thin.svg?v=516b6b0e43655f7355911fe002b0a538a790a62c2c8c3db74e184ff62ba615d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
