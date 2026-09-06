export const name="cricket-bold";
export const id="dl_7aabbf5933f043dcb061";
export const url=new URL("../icons/cricket-bold.svg?v=387b9cf52b15bc1c3fe565dc7798e93346a713073b143c73719a1bdec2eb1aa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
