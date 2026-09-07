export const name="lucid_2-log-out";
export const id="dl_b6e5c32bf52d4834b96f";
export const url=new URL("../icons/lucid_2-log-out.svg?v=592a587a2eee4c9107a7c9e4c063bb4abe34384d13172860c19999dbee0fa3ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
