export const name="list-dashes";
export const id="dl_a21ace86cd0d45189684";
export const url=new URL("../icons/list-dashes.svg?v=3c1182401db7687437913cbb2fbf17e5eeaad2a96f9420cd8247b02015ce3db2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
