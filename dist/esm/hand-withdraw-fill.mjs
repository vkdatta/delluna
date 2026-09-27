export const name="hand-withdraw-fill";
export const id="dl_de9b5b18a1c645498cd0";
export const url=new URL("../icons/hand-withdraw-fill.svg?v=d8f32d1b67745bf98143c9f2b99bfbad8eea7a322cdde87c63849503e2e7ba1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
