export const name="mouse-middle-click-bold";
export const id="dl_91865468954c4729a6c4";
export const url=new URL("../icons/mouse-middle-click-bold.svg?v=760c3945ab10daf8c6a8214f6790446e2f59a4b76c5e465c06abca59e8d55980",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
