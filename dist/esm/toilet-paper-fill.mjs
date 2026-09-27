export const name="toilet-paper-fill";
export const id="dl_082c35724f0ba80a4b68";
export const url=new URL("../icons/toilet-paper-fill.svg?v=b3b2a3ce74e89cf7e96fe7afeaca3a16fc3f07f3d4a1ec7e7129604877a45a72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
