export const name="subtract-square-light";
export const id="dl_5eac42d948d1ff70ef0a";
export const url=new URL("../icons/subtract-square-light.svg?v=6b6fd77ffe98fe8bff4f8a9309f2b5ede102a36cc5b9b930b4e2f11181a6c141",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
