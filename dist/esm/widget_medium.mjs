export const name="widget_medium";
export const id="dl_a559e7f4a5742dbf3020";
export const url=new URL("../icons/widget_medium.svg?v=9083c42e6e06153ae0ae68342dafc680db105bc0b2a41b59ddc47c6e7e53808b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
