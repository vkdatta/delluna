export const name="paper-plane-right-thin";
export const id="dl_897696c029c3477ab2cc";
export const url=new URL("../icons/paper-plane-right-thin.svg?v=4aa4e981468e99d7ec7444b9339cb66e5233610267da4e5f3246a6580d147076",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
