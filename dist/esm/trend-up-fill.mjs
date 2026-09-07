export const name="trend-up-fill";
export const id="dl_1fb046eeb3f24f6db64d";
export const url=new URL("../icons/T/trend-up-fill.svg?v=b14faa248cbdf1770de7b2cb422569b3ef44ac6fbee5b8a6ed98328259ba19c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
