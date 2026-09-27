export const name="store-fill";
export const id="dl_f8fb765053f558e278b7";
export const url=new URL("../icons/store-fill.svg?v=5237f2af1e982e20b1105eb0100145c9703d05ff3ac9507ddb8b0dfe9e9ddfec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
