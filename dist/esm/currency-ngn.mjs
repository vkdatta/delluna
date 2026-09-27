export const name="currency-ngn";
export const id="dl_c5a6ef2b44734d75bd9c";
export const url=new URL("../icons/currency-ngn.svg?v=d29278312af23af2947e03711aae0cac1c4f95046ee12771f026ac419582cdfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
