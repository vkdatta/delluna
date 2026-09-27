export const name="pentagram-thin";
export const id="dl_05f2926bfb644c6da49a";
export const url=new URL("../icons/pentagram-thin.svg?v=eb10f6a698b17dce807a2aff31e748c4f799da6962d889c0ea8d1ded8b861213",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
