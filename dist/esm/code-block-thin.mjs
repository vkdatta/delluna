export const name="code-block-thin";
export const id="dl_584515a04d8146fab4a2";
export const url=new URL("../icons/code-block-thin.svg?v=28f54987501be8f64339da14a5ae89cbf1b2989bcead477ad866a15dea75b360",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
