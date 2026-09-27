export const name="wysiwyg";
export const id="dl_707c310068381ca90341";
export const url=new URL("../icons/wysiwyg.svg?v=cc2011f03f623dcf3ffa0671a7acc09ad3f557ada4edc9ce97a919b7649298b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
