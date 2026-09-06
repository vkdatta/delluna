export const name="lasso-duotone";
export const id="dl_f63930e9e4104825a741";
export const url=new URL("../icons/lasso-duotone.svg?v=8823db8fa4cb03b56235a6cfea12ba38bc0a51252a6e75bd57b82a308fd0d922",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
