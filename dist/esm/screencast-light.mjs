export const name="screencast-light";
export const id="dl_7d0630b890c854af0c60";
export const url=new URL("../icons/screencast-light.svg?v=32222db362f5e8eca8a6468e5dd3eaaa2b0fd4ff6eae3d740f9c243b893384fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
