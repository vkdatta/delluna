export const name="columns";
export const id="dl_1a31197674584a16ab0d";
export const url=new URL("../icons/columns.svg?v=95a676331d3ea942f360f316c00061f0cce37264274f499a9b8c3b50f3b9f646",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
