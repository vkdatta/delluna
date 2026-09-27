export const name="variable_insert";
export const id="dl_abc7c0647e9190f30df8";
export const url=new URL("../icons/variable_insert.svg?v=8ae33d0f7397b50a0888310eb04c6c9764a109439ead09f479f85ad06929df78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
