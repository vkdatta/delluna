export const name="print_error";
export const id="dl_09c68aa8dcf8df42ab1f";
export const url=new URL("../icons/print_error.svg?v=e1b633d37cdc9612e7b5a4c666a2d6b9b46af8316c0680fecc70418122fc2e8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
