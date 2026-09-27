export const name="tsunami-fill";
export const id="dl_0dcb3e59d6ece0ccf7dc";
export const url=new URL("../icons/tsunami-fill.svg?v=63b87f3793adee26d5d18cc79a6b8ef147c04477fd54a94d3f38b16a5e7a128c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
