export const name="lucid_1-asterisk";
export const id="dl_542ce640b5804a54af7c";
export const url=new URL("../icons/lucid_1-asterisk.svg?v=03d20bf17ac31b7ff419606d159bab723b78103c41008df3e80c67ad6e053fef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
