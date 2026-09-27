export const name="home_speaker-fill";
export const id="dl_e50dd776edbab290ab49";
export const url=new URL("../icons/home_speaker-fill.svg?v=992fe91eb48fd1d65d1c42777d52e60c7c510cdb8f51fe8bb7703ce3890c4cda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
