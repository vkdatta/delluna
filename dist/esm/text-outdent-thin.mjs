export const name="text-outdent-thin";
export const id="dl_6d899ff1f8d4cbba5257";
export const url=new URL("../icons/text-outdent-thin.svg?v=cf85ea99516eed7cb0bdd8f8b00885b10691d43ec0dceb81fd259091ae9d8e0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
