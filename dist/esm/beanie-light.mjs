export const name="beanie-light";
export const id="dl_058bf0a8684a4ff39da1";
export const url=new URL("../icons/beanie-light.svg?v=de856c1a8dd59e89e72f227f4b350381e8e75467e834e236523129e092028f35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
