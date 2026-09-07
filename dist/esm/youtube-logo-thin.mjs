export const name="youtube-logo-thin";
export const id="dl_4506088385074933af21";
export const url=new URL("../icons/Y/youtube-logo-thin.svg?v=4bd4f4711ea9189a72a839da090516102dc486dfc22a24358fa0bff849809aad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
