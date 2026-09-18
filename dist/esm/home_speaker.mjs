export const name="home_speaker";
export const id="dl_8177048682a14561afe9";
export const url=new URL("../icons/H/home_speaker.svg?v=eb944e529dbae4cc22c0a5f1eca64abab0275521e511b75a98af2115d15cf48e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
