export const name="seal-question-thin";
export const id="dl_7120234773bc434ca211";
export const url=new URL("../icons/S/seal-question-thin.svg?v=21faa85b860fd5a9dcd7b5e7ac6b1a74bd74088c812a11f2f55908ece2618d03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
