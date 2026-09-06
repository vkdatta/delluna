export const name="folder-simple-user-light";
export const id="dl_943d1087b1f343b3a26d";
export const url=new URL("../icons/folder-simple-user-light.svg?v=3a9b9945f3b4ddecb8c229461b971e99d2e7e2ab11cbc83ed493cd8dfb90c09a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
