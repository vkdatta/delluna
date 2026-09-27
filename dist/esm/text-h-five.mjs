export const name="text-h-five";
export const id="dl_cb54828fa46aaf673c78";
export const url=new URL("../icons/text-h-five.svg?v=d87280c4a88e6c63fe546a995e38b7bf138bf641cc60005400d708563b1fb53c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
