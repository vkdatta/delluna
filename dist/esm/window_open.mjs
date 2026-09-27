export const name="window_open";
export const id="dl_de4e34fef9aa9a635b4e";
export const url=new URL("../icons/window_open.svg?v=8e30ba7a828dfcbbad767bebd6227db62bbf402d2a2cc7c29366feec79e4a4fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
