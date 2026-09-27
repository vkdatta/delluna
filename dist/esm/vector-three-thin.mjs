export const name="vector-three-thin";
export const id="dl_ccb4306d9e5a17c1c2f5";
export const url=new URL("../icons/vector-three-thin.svg?v=746795a32827c9e453c841c65641dd34c1575cca7651c95590045b00003bbb9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
