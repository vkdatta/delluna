export const name="pinch-fill";
export const id="dl_2b3f2af813a842abb1eb";
export const url=new URL("../icons/pinch-fill.svg?v=956fd4fe434f15f8b89b889f4434897b94ab2abc117450a16a6e1aa1950496d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
