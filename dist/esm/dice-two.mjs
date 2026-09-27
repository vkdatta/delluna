export const name="dice-two";
export const id="dl_79b3e2f3977a4e52aacb";
export const url=new URL("../icons/dice-two.svg?v=ba49cde249349d5504e5a5ffa937593a43a38434071355aa611f2801b746beca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
