export const name="tennis-ball-thin";
export const id="dl_895729a9d7da3262eac7";
export const url=new URL("../icons/tennis-ball-thin.svg?v=b8d547d56c4d2d1a30948d54081ceecc2b0700e684c7c0c2f045a4c3d2a3bfb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
