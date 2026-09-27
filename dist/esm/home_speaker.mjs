export const name="home_speaker";
export const id="dl_327649e53cde218d66b2";
export const url=new URL("../icons/home_speaker.svg?v=cd6b70b2c19c8d6ee8298fdd359c76ed07066b26f9bd239be9778d175482df0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
