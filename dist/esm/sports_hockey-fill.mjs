export const name="sports_hockey-fill";
export const id="dl_126f36e35c274aa8af55";
export const url=new URL("../icons/S/sports_hockey-fill.svg?v=10469f334ff2b1d60c7faae732db5d0e8bacb0805ae6ded11d1f60ca3bb312d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
