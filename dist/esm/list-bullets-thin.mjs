export const name="list-bullets-thin";
export const id="dl_659b815808d5414388f0";
export const url=new URL("../icons/list-bullets-thin.svg?v=17c9684953f2ca5cf3432ce37e94b5f38430d9625d9074e5441145e9aa6a92c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
