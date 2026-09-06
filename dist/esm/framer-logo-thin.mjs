export const name="framer-logo-thin";
export const id="dl_eefff701a2a04f969b3e";
export const url=new URL("../icons/framer-logo-thin.svg?v=525582669d112a35adae6b0f52488cf2e4012c46764689509af62a39019f4391",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
