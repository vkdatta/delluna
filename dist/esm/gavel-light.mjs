export const name="gavel-light";
export const id="dl_940988ee598d4d7aa7d2";
export const url=new URL("../icons/gavel-light.svg?v=f21270c3d2fef4b6bb494882491d150c3327ebdd8174aaa24c9ce33b70326f6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
