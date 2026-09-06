export const name="paint-brush-household-thin";
export const id="dl_c9974ef652ee47fe95f7";
export const url=new URL("../icons/paint-brush-household-thin.svg?v=bd83a42c899731fc96d55d6630173a182cdc5a2d52dff955676b930369902a09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
