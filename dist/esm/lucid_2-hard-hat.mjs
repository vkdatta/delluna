export const name="lucid_2-hard-hat";
export const id="dl_65fb64b3eb7e4f728857";
export const url=new URL("../icons/lucid_2-hard-hat.svg?v=df7be39821e31ccf0d3a90a56bb9c46315c398c3a909f8586feb224edaab8cc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
