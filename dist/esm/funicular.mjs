export const name="funicular";
export const id="dl_bc011b8d31738a9d3784";
export const url=new URL("../icons/funicular.svg?v=15544eed97b37c4e1efe5c5052446d061f8aa1ccdde186f5d2d2b8b1c11dd8f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
