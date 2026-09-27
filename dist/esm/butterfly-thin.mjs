export const name="butterfly-thin";
export const id="dl_459325d906fe42c8b881";
export const url=new URL("../icons/butterfly-thin.svg?v=a180df586f02d560aa77178af843b083e476c4c534387ea9c80bebd369dffca0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
