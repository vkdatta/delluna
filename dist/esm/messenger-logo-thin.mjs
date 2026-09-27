export const name="messenger-logo-thin";
export const id="dl_8dd6d273c16244189386";
export const url=new URL("../icons/messenger-logo-thin.svg?v=33d458cab09f4e3923f0791867172c80e584b9713a0dabcc75c7d29a9cddd365",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
