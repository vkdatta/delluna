export const name="shrimp-thin";
export const id="dl_ea4ebf5d27f5e03afaab";
export const url=new URL("../icons/shrimp-thin.svg?v=2e51b8e181669287f31c613b150b8079e3dfd94eb70c3336f02872ac5b71ef22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
