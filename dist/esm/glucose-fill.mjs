export const name="glucose-fill";
export const id="dl_56e285fd20104cd789dc";
export const url=new URL("../icons/G/glucose-fill.svg?v=ce052c8692e7d051cf7f315fb3e301ddc2920bcaa9d5c7fd0818a17747d8d995",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
