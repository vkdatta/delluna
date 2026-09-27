export const name="binoculars-light";
export const id="dl_e1b4eed64662409b90f6";
export const url=new URL("../icons/binoculars-light.svg?v=ca906f8e30a203bc750dd8722e28fa52699a9bb16448c5e5c318c5b3614a3eda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
