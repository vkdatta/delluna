export const name="lucid_1-asterisk";
export const id="dl_542ce640b5804a54af7c";
export const url=new URL("../icons/lucid_1-asterisk.svg?v=5a6efda7f79b5c02f9ef210a81efc5c9e85653c267acb8d5c7a805eb1394c5a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
