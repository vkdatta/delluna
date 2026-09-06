export const name="high-definition-thin";
export const id="dl_5557ca1f61454107bbe9";
export const url=new URL("../icons/high-definition-thin.svg?v=0af9b39dc5e50b52bf88959589202ebcd526ff34991d4cbadcda944f2ff6018a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
