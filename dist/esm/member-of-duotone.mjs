export const name="member-of-duotone";
export const id="dl_9d6bbe4345e0453ca5cc";
export const url=new URL("../icons/member-of-duotone.svg?v=22b6110f72ca57cd74af11788ae7e832b72a1cfb63c5247818eb20903776b69e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
