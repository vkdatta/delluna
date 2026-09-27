export const name="undo-2";
export const id="dl_c4b452afad9842ebb125";
export const url=new URL("../icons/undo-2.svg?v=7b75ee022f17f05a9a15887867aa8cd60a1b29cf6de083c14a37aa7d799491d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
