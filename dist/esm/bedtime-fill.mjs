export const name="bedtime-fill";
export const id="dl_6780b5232593a554f8bd";
export const url=new URL("../icons/bedtime-fill.svg?v=a13b0a4d8bd891e55be302128a190517ee8bcc4b0d895c0e4e70bbedeae1019a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
