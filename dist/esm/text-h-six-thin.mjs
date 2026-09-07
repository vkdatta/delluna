export const name="text-h-six-thin";
export const id="dl_5c0cba210ac0414887a6";
export const url=new URL("../icons/T/text-h-six-thin.svg?v=6134c84c9c9f44f5a180bba36b02276a28d321dd5e9c48860a1cfa9cd560af96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
