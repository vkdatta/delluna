export const name="tree-structure-thin";
export const id="dl_285039438f665e4e84a5";
export const url=new URL("../icons/tree-structure-thin.svg?v=6780e490440549e01bf3c584ed2838b91e318c2501106cb4ef737403d6ca6fcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
