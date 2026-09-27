export const name="upload-thin";
export const id="dl_746937299a3a2be4af06";
export const url=new URL("../icons/upload-thin.svg?v=2109735596705e3be0de1eecce5c56700e23593ac26133959ed86bca8e6e9bfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
