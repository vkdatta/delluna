export const name="arrows_output";
export const id="dl_47a5f3a96f685b9f73b5";
export const url=new URL("../icons/arrows_output.svg?v=f25093f89ae2eca2a8090b7c92495ab8d8faf8ab83aaaaf8e0132b59e532a45a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
