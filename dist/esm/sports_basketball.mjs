export const name="sports_basketball";
export const id="dl_682aafde8b8e8213efdc";
export const url=new URL("../icons/sports_basketball.svg?v=aca0518818b03d107993105023296d3607ccd1c55a129e77b9f06e38df13b9a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
