export const name="brackets-curly-thin";
export const id="dl_77ea1853c78748a99a4c";
export const url=new URL("../icons/brackets-curly-thin.svg?v=e1d5879fdf6ff94c06aa79014aa3f278026a897abda7d5206879495011624d52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
