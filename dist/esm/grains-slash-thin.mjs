export const name="grains-slash-thin";
export const id="dl_b78f5c0af9dc48078dcd";
export const url=new URL("../icons/grains-slash-thin.svg?v=8bd7353121fa1e88e989a3b3ffc6d1d7e6fd6fb726a34f77ed6064c7a7d18882",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
