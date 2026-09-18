export const name="gpp_maybe";
export const id="dl_f44ab276e053419eb42c";
export const url=new URL("../icons/G/gpp_maybe.svg?v=f7be53de5ee90e9a615e4a71a88041c0ab79d218ccdb7ce0cd77a84d4d24e060",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
