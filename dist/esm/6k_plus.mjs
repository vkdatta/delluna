export const name="6k_plus";
export const id="dl_c1c502cf0556e60f964e";
export const url=new URL("../icons/6k_plus.svg?v=ad1c2dd7758b15fd36a8dbdddd89c06dd74465753793cb0305c22b9a8bc046f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
