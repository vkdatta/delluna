export const name="beer-bottle-thin";
export const id="dl_915b7fd2b7054a0fbf1e";
export const url=new URL("../icons/beer-bottle-thin.svg?v=a9537629b0bac3e1f7cfa34f4984df15a5e03bb5d9e3523622faf5d42bbe50b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
