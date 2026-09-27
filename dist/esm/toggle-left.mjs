export const name="toggle-left";
export const id="dl_c416b564f00a9dff1497";
export const url=new URL("../icons/toggle-left.svg?v=e177a402ae668c7a3b9d3a3afcc8f61ddbe182c319a44f9ffdb650e1184fc0d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
