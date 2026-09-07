export const name="dice-two-thin";
export const id="dl_a95a74412d1b46af8934";
export const url=new URL("../icons/dice-two-thin.svg?v=a9471b783ca91b055ec54bccf62d45b2b2af8dcb197409d3f738abf5fb42d570",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
