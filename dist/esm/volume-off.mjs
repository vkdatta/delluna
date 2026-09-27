export const name="volume-off";
export const id="dl_00e60c8fe9d849d89d4d";
export const url=new URL("../icons/volume-off.svg?v=7298873cd3544f7872ee35a0c60d90763bc1d530edf58776126c651868157b60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
