export const name="scribble-loop-thin";
export const id="dl_94b2b3d9db314d29ad3b";
export const url=new URL("../icons/S/scribble-loop-thin.svg?v=69f6cab67aeb49078aaa49446bca3a76a661c0e5b29a93e86eae020f47341d33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
