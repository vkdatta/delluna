export const name="selection-slash";
export const id="dl_6422a45c918121a7e9d7";
export const url=new URL("../icons/selection-slash.svg?v=1276132550d6d647ae96a43c66c3a05065097205475d5dc98e97d41aa011e9ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
