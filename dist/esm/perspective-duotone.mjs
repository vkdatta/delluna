export const name="perspective-duotone";
export const id="dl_5e266d6dc89f409eb870";
export const url=new URL("../icons/perspective-duotone.svg?v=da821b7614a52af82f63487a6bb3c107602f76e313ae0b9cb509c23cabee69f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
