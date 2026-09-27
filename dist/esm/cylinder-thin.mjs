export const name="cylinder-thin";
export const id="dl_324344421e9546d4a181";
export const url=new URL("../icons/cylinder-thin.svg?v=96e15ba498cf0fa724331c63df399095d13b351e6d06f0bbb7fc0ccd17ebeaac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
