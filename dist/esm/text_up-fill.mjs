export const name="text_up-fill";
export const id="dl_22768764eccb7056acb0";
export const url=new URL("../icons/text_up-fill.svg?v=de351e472f1b6ba3b56f53c709577284c640bf231947d7fa36dc1ec2fd2ec373",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
