export const name="atom-bold";
export const id="dl_70ebc245e0d54ed396ea";
export const url=new URL("../icons/atom-bold.svg?v=ed8d0f68589803ffa4f3dad1d4b772100ba7bca1cdf64e370a44589be92568af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
