export const name="envelope-simple-open";
export const id="dl_19efd37cd86642b5b48e";
export const url=new URL("../icons/envelope-simple-open.svg?v=afe868414c64a00b46fce09798dc96f7cb7a4e70a3ab67115240a4300d8fbf5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
