export const name="spray-bottle";
export const id="dl_ed107ee636584a45bd36";
export const url=new URL("../icons/spray-bottle.svg?v=0af0316aefcd871f92259004dc88e8f54079cebfd24d4797b713979194a667c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
