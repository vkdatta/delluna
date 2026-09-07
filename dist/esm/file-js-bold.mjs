export const name="file-js-bold";
export const id="dl_6e8c254acdfc4245aafd";
export const url=new URL("../icons/file-js-bold.svg?v=1758a8bfd3c34fceef1f33916e73423eda1dc362d258cf3f4686a9af5b393f41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
