export const name="arrow-bend-double-up-right-thin";
export const id="dl_feafcc24bf2b4277a775";
export const url=new URL("../icons/arrow-bend-double-up-right-thin.svg?v=70baaeb413f93a253dd70a43542942adcb5101cf5577d08431a848ef7e81ed7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
