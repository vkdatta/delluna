export const name="upload-simple-bold";
export const id="dl_d0d1ed85fe48e5147598";
export const url=new URL("../icons/upload-simple-bold.svg?v=6aeff3b1e47cfe82bb136b817ab13d549f0cfbb468a79ad7ce0d152332d6e0c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
