export const name="lucid_2-file-minus-corner";
export const id="dl_630c8f7417484459b47e";
export const url=new URL("../icons/lucid_2-file-minus-corner.svg?v=44981e9e0d31f6bd017a26fc9589fb335da26492bcc64e663efdc565359f45a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
