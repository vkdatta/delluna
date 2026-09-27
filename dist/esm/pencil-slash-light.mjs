export const name="pencil-slash-light";
export const id="dl_fad2a7a47b284e76ad8f";
export const url=new URL("../icons/pencil-slash-light.svg?v=67f9a1dfd845c485fca4d19c0a7ad3213431b881b17cde53fefc0b900bada3d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
