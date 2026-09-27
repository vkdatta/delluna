export const name="lucid_3-shield-question-mark";
export const id="dl_e8d66761ce6a40fe8a4e";
export const url=new URL("../icons/lucid_3-shield-question-mark.svg?v=0fd209f3c97963a9f2c90ecdb4dffc30a14ea3b53fd1def48544b45dcbc34aac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
