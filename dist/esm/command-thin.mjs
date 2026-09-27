export const name="command-thin";
export const id="dl_c01613a2fe9a497db6c8";
export const url=new URL("../icons/command-thin.svg?v=71be8f8614532f5eade4377e4f48b8c2b05b23a45aa12b102489121ae0f9d94f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
