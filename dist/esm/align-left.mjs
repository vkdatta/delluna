export const name="align-left";
export const id="dl_540c27efb9b54b0bae42";
export const url=new URL("../icons/align-left.svg?v=3c3fbac6580b0445e7c563cbc269168f86a9edb2878c6b1f09414df587db5a24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
