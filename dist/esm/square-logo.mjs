export const name="square-logo";
export const id="dl_9d066b61b9bb1ed72c80";
export const url=new URL("../icons/square-logo.svg?v=9ca80476c2fe1aa51c0ce77b4c63d7c0050f187a5a17a75f37c4a4574d2e3d52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
