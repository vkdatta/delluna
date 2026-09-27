export const name="git-merge-bold";
export const id="dl_ce0a37f5c7f0452fad86";
export const url=new URL("../icons/git-merge-bold.svg?v=62aac2568a23f75c4a8ffe49b49a134b81639a85de7c5794b92c29346e508345",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
