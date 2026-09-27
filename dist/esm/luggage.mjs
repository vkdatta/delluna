export const name="luggage";
export const id="dl_cc3485151419e3e2d4c3";
export const url=new URL("../icons/luggage.svg?v=4ff7ebe9a6c11e6df0810bddd4456cf6d15ccbeee6f3053c0dc644759d91f667",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
