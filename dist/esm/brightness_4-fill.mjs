export const name="brightness_4-fill";
export const id="dl_42435d9f0d7a92d59eb8";
export const url=new URL("../icons/brightness_4-fill.svg?v=9227316bc205cf0e629892dbd80c4a29ff5b7f8ec1593bee5b07527172626650",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
