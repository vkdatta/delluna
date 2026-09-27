export const name="2mp";
export const id="dl_e82017371d670c5f1433";
export const url=new URL("../icons/2mp.svg?v=8d91ec63ab048cc55b24acc1a4e2dd01fbc30c78bb18d07d9f368a14e54dfc55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
