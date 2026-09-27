export const name="brackets-round-thin";
export const id="dl_9094f072c93242a9a6e8";
export const url=new URL("../icons/brackets-round-thin.svg?v=3f11da984fb6c960be11bb4821c693ff894594e8789e9e8aea4a8770bc699878",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
