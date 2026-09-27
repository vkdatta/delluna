export const name="git-branch-thin";
export const id="dl_aa784b61ae2f44aab239";
export const url=new URL("../icons/git-branch-thin.svg?v=2d3f652aadbf205440a076f9e3c94d6b73948262a5267ab59c4a3f59c5d08652",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
