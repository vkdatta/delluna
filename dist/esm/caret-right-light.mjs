export const name="caret-right-light";
export const id="dl_312a718167724ce1a780";
export const url=new URL("../icons/caret-right-light.svg?v=013eec7d563c69c0fce8ed667d0d35b218f54232886bfc8931f7cca82f4cbd10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
