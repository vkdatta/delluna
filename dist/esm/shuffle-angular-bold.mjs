export const name="shuffle-angular-bold";
export const id="dl_a5cb1e080ee70ded679c";
export const url=new URL("../icons/shuffle-angular-bold.svg?v=7fe866b0542fddf5008a8149b3659caba64642b46a8c1529b8cb64f9bca5829e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
