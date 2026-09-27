export const name="high-definition-thin";
export const id="dl_5557ca1f61454107bbe9";
export const url=new URL("../icons/high-definition-thin.svg?v=f3fa1fad81c999d1d81315df53e877ce3fd1e290d8e218ee3a7bb2a20fbbcd82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
