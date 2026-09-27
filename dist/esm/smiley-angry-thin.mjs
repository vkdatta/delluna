export const name="smiley-angry-thin";
export const id="dl_8abdae695e02b4b64791";
export const url=new URL("../icons/smiley-angry-thin.svg?v=2c284a064f59c727f7050d50d736666e5a646de59732cb61ec55a820ca00580b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
