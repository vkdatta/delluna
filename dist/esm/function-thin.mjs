export const name="function-thin";
export const id="dl_bb5df4d82a2b4d46949a";
export const url=new URL("../icons/function-thin.svg?v=e04144311b07d8c80c6329ffa3eb2fccd28081a730b8a2e3125d227c337a3477",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
