export const name="snippet";
export const id="dl_8feeb6ca45654487b6d4";
export const url=new URL("../icons/snippet.svg?v=5f1fbc4888e618257891ae73298e19eef0811cf13726aad579fd32fa512f2b68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
