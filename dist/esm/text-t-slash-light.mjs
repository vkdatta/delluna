export const name="text-t-slash-light";
export const id="dl_ffc5e2db26d6bfb6905a";
export const url=new URL("../icons/text-t-slash-light.svg?v=9537501484a4de6bc38f091a45a9e836c5be52ec2debbb1f3c454c75d0e948b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
