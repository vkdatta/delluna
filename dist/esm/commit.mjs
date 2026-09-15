export const name="commit";
export const id="dl_ea7606871b1945959e04";
export const url=new URL("../icons/C/commit.svg?v=bb445313674caa68ccf181011af9fe9a3285292a3e16d3313ff94f958af16e50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
