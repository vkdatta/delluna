export const name="resize-thin";
export const id="dl_57d1130531274d439b25";
export const url=new URL("../icons/resize-thin.svg?v=05c24fbf07e8aa3c9a48c1755820a9be1328434808cf4ddf7aae26c95ef0ce87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
