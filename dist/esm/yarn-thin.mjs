export const name="yarn-thin";
export const id="dl_5844ff997dea4700ea2e";
export const url=new URL("../icons/yarn-thin.svg?v=905c9b21e3d5ed7945b5ff96af7000d565c274bbc0d54f53fbf7c83ad23dc65b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
