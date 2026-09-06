export const name="hammer";
export const id="dl_0e4c14960616472eba60";
export const url=new URL("../icons/hammer.svg?v=286bddc0b30f4b0b0864cf8ca871b07a9c0a16d1df1f743b2cbabb15b6d9140d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
