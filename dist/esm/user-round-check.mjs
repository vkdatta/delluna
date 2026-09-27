export const name="user-round-check";
export const id="dl_e2c37f8fbebb4822b60e";
export const url=new URL("../icons/user-round-check.svg?v=cba3760867c0da2e41616fc0cfe59ee3b5b9673715909fee7ddab46ff8d0f0cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
