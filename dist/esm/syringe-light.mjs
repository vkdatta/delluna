export const name="syringe-light";
export const id="dl_4eb44e285d9becc01b27";
export const url=new URL("../icons/syringe-light.svg?v=cccc2281a52d06d747229f1bbde22ccd9c847079d654a32de06395f9d1cbf11d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
