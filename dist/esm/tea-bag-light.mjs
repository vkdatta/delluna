export const name="tea-bag-light";
export const id="dl_544fd6304f3247819cad";
export const url=new URL("../icons/T/tea-bag-light.svg?v=b3eb43967edcdad00e3f079d48cf340ac91acedce6f6f8e8a95d457c188c14c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
