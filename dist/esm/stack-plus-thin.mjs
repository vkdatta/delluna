export const name="stack-plus-thin";
export const id="dl_55fd07de903e88453e7f";
export const url=new URL("../icons/stack-plus-thin.svg?v=01c0a9e83712229ee2fd1bbec2435be54d65b70568c0388e82e67ee8f8275515",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
