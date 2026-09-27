export const name="lucid_3-recycle";
export const id="dl_fb5ec6e4e9474553985e";
export const url=new URL("../icons/lucid_3-recycle.svg?v=93a47764be6cfda259a3e9a6c0f6c592466c264df1cbf168a550e2f53151ec66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
