export const name="switches-fill";
export const id="dl_5fe7ac438fabce2456df";
export const url=new URL("../icons/switches-fill.svg?v=406c2aa56cba247add0c530b81a74317293441923259fdccbacad4a9a3a0eac3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
