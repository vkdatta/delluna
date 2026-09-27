export const name="lucid_2-file-x";
export const id="dl_1e0d565c583a4ad0a659";
export const url=new URL("../icons/lucid_2-file-x.svg?v=54762034b7723b1889644dbf784d044f34a919a5a41b65821b757df148b3bdce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
