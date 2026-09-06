export const name="file-jpg-fill";
export const id="dl_44e40ce742584518a2c0";
export const url=new URL("../icons/file-jpg-fill.svg?v=00c60591d64f43edc4363c72eaaf9562edb226e00d3f24e13e294e619264a8ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
