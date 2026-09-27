export const name="pencil-simple-line";
export const id="dl_4c330efbf5434b34b84b";
export const url=new URL("../icons/pencil-simple-line.svg?v=85a6f4625cd5ed71bcf69f5de3fdd3873411e8a4f6e6926d55d28f3fde6060a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
