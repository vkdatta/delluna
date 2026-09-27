export const name="shuffle-angular-light";
export const id="dl_214bd0d1df1bacaa88db";
export const url=new URL("../icons/shuffle-angular-light.svg?v=552e940567f67f162221f1066735cb4d658878d607937890ad0fe5f4ddcbe342",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
