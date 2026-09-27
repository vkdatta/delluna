export const name="exclude-square";
export const id="dl_952e31d746ee4515bfd1";
export const url=new URL("../icons/exclude-square.svg?v=a333d47253e6febcffdf2f9f9d3febe49a774b4503e6f03485be9af0667c4d14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
