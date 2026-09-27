export const name="lucid_3-rows-2";
export const id="dl_78cdb11404b34bd3b058";
export const url=new URL("../icons/lucid_3-rows-2.svg?v=bcc07f1c4f4cd2bea8c6a23ac57645019203b76f4704532e265f6ed829fbca1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
