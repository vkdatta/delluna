export const name="privacy";
export const id="dl_30ba8442346a9fed6530";
export const url=new URL("../icons/privacy.svg?v=a9e96c2c1693fd55b35a6f632baf5b79328b4b251a13b1daaa84290d611a5488",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
