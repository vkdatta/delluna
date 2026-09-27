export const name="tip-jar";
export const id="dl_54b533f528f2f1eafd53";
export const url=new URL("../icons/tip-jar.svg?v=9aa1921bda7d3be504506fe3413a6f8cf67645558b6c37625ee22730b6c4d0b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
