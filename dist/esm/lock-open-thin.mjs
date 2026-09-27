export const name="lock-open-thin";
export const id="dl_5bd8653ce81541fe850b";
export const url=new URL("../icons/lock-open-thin.svg?v=2e33343eef997c6743b002956d1473e708747fd779b273670654e10ca89b23fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
