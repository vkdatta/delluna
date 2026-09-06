export const name="high-heel-thin";
export const id="dl_e6a36290987c4fbb9b20";
export const url=new URL("../icons/high-heel-thin.svg?v=d3f1e71ca75390bd8632cb20bc5b6af64044ec1f36320724de0c087be7baaabf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
