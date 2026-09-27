export const name="post_add";
export const id="dl_8b7e6eff4d2905a73b64";
export const url=new URL("../icons/post_add.svg?v=c443c7003f298af97b9fc587e05827eddb4411e53592c6ceef1d82272f3c3118",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
