export const name="folder-lock-light";
export const id="dl_570756d9a0c6421d8918";
export const url=new URL("../icons/folder-lock-light.svg?v=b72f9317582dd720ab3c5e8504b2196e80f615684ddd6098dd59a18c8c7ccc60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
