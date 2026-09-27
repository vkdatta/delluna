export const name="caret-circle-double-right";
export const id="dl_ad61049a6c554385ac91";
export const url=new URL("../icons/caret-circle-double-right.svg?v=993d36f6e703e80b76773281bae495c274e9de8c4b5889655c0d14dd9c5aa765",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
