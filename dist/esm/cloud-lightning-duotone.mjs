export const name="cloud-lightning-duotone";
export const id="dl_325756e062f1483892b0";
export const url=new URL("../icons/cloud-lightning-duotone.svg?v=ceb73c63957567a116d0c2fbeae36b987528a4013469c009bfe447c2b61f168c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
