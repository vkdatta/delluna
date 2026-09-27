export const name="split-vertical";
export const id="dl_6c9b1f9984be55e9411a";
export const url=new URL("../icons/split-vertical.svg?v=357db29f133ab2e8e7f88d3c29ced4358c4a2c0f782b15960e5a47b63f811797",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
