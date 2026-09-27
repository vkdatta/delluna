export const name="cloud-slash";
export const id="dl_bc85c8d0e7b440968fe3";
export const url=new URL("../icons/cloud-slash.svg?v=97b563831f9d9277a6adbd56748c84848a8d344e0ceee76fa212ce27734a08c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
