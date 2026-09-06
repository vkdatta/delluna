export const name="crown-simple-light";
export const id="dl_d87181838b4148b29ab1";
export const url=new URL("../icons/crown-simple-light.svg?v=9a434706d20065d356415d8b79b4983c72b8800ce60e20892cc2ac357aec43ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
