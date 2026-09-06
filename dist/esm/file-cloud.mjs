export const name="file-cloud";
export const id="dl_379b64b0a3c845c189e6";
export const url=new URL("../icons/file-cloud.svg?v=05a0a5f6c5b40c2e873cf28b07cf4a22f8e600e6b85fa09750d68ad559f68928",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
