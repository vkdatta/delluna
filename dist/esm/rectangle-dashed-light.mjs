export const name="rectangle-dashed-light";
export const id="dl_3255dfef624b43528139";
export const url=new URL("../icons/rectangle-dashed-light.svg?v=b4678f391ab23b7f78ea1b6dd62d293f07f29a7f292e6da0894fcd36738b000a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
