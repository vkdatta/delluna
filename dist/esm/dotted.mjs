export const name="dotted";
export const id="dl_ca899a68e9ff4818a432";
export const url=new URL("../icons/dotted.svg?v=a402268f3635833687106d23d058f559586feeb84994c3dcfbf237e49976ec54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
