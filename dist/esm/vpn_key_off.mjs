export const name="vpn_key_off";
export const id="dl_b0daee0074fd4ae1733c";
export const url=new URL("../icons/vpn_key_off.svg?v=55fdeaaa84c3289c3d42e6c3796304dbd9bc0fe5de658658c0caf9c7f3602a5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
