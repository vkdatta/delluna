export const name="digital_out_of_home";
export const id="dl_422b92cf78167114d1cc";
export const url=new URL("../icons/digital_out_of_home.svg?v=59ca6592978dd63fc61169107ba7a2293a51916acf7a6bc87b2ae9ebb6e2bc51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
