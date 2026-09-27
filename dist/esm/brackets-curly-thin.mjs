export const name="brackets-curly-thin";
export const id="dl_77ea1853c78748a99a4c";
export const url=new URL("../icons/brackets-curly-thin.svg?v=d0217518ab87ee68a0fc44c17e7dac04fa3722b8e7e8275bb2162199b0c72301",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
