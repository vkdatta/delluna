export const name="bathtub-bold";
export const id="dl_af3827934e6f4f7cace0";
export const url=new URL("../icons/bathtub-bold.svg?v=7bccb8d38f6034ce2f4b78900dc0494a5a841a129019079372de48a36e860ece",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
